import React, { useState, useEffect } from "react";
import profile_pic from '../Assets/profile_pic.png';
import axios from "axios";
import "./Profile.css";

const Profile = () => {
    // State for form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");

    // State for loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch user data from the backend
    useEffect(() => {
        // Get the email from localStorage
        const storedEmail = localStorage.getItem("Email"); // Assuming the email is stored in localStorage

        if (!storedEmail) {
            setError("No email found. Please log in.");
            setLoading(false);
            return;
        }

        // Fetch user data when the component mounts
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("/welcome/Profile", {
                    headers: {
                        Authorization: `Bearer ${storedEmail}`, // Send the email as Authorization header
                    },
                });

                const { Name, Username, Email, PhoneNumber, DateOfBirth } = response.data;

                // Set the state with fetched data
                setFirstName(Name.split(" ")[0]); // Assuming Name is "First Last"
                setLastName(Name.split(" ")[1]);
                setUsername(Username);
                setEmail(Email);
                setPhoneNumber(PhoneNumber || "");
                setDob(DateOfBirth || "");

                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError("Error fetching profile data.");
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    // Handle form changes
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleDobChange = (e) => setDob(e.target.value);

    if (loading) {
        return <div>Loading...</div>; // Display loading text until data is fetched
    }

    if (error) {
        return <div>{error}</div>; // Display error message if there was a problem fetching data
    }

    return (
        <div className="profile-page">
            <main>
                <div className="bigprofile">
                    <div className="bigsmallprofile">
                        <div className="leftsideprofilebox">
                            <img src={profile_pic} className="profile-pic" alt="Profile" />
                            <div className="profile-content">
                                <h1>{firstName} {lastName}</h1>
                                <h3>{email}</h3>
                            </div>
                            <button className="manage-account-btn">Edit Profile</button>
                        </div>

                        <div className="slectionstyle">
                            {/* Directly render each section */}
                            <section className="container">
                                <div className="profile-section">
                                    <h2 className="Manage_Profile">Personal Information</h2>
                                    <div className="Name">
                                        <div className="form-group">
                                            <label htmlFor="first-name">First Name</label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last-name">Last Name</label>
                                            <input 
                                                type="text" 
                                                id="last-name" 
                                                value={lastName} 
                                                onChange={handleLastNameChange} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input 
                                                type="text" 
                                                id="username" 
                                                value={Username} 
                                                onChange={handleUsernameChange} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            value={Email} 
                                            onChange={handleEmailChange} 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="number">Phone Number</label>
                                        <input 
                                            type="number" 
                                            id="number" 
                                            value={phoneNumber} 
                                            onChange={handlePhoneNumberChange} 
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <input 
                                            type="date" 
                                            id="dob" 
                                            name="dob" 
                                            value={dob} 
                                            onChange={handleDobChange} 
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Billing Information Section */}
                            <section className="container">
                                <h2 className="Manage_Profile">Billing Information</h2>
                                <button className="manage-account-btn">Add Account</button>
                            </section>

                            {/* Payment History Section */}
                            <section className="container">
                                <h2 className="Manage_Profile">Payment History</h2>
                                <p>Payment History Coming Soon!</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
