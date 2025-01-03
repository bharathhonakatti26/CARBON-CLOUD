import React, { useState, useRef, useEffect } from "react";
import './Mainnavbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import imglog from '../Assets/new_carbon_cloud.png';
import profile_pic from '../Assets/profile_pic.png';
import notifications from '../Assets/notifications.png';
import help from '../Assets/help.png';
import { GoFileDirectoryFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

const Mainnav = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [user, setUser] = useState(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate("/");
    };

    // const navprofile = () => {
    //     navigate("/welcome/Profile");
    // }


    // Handle account deletion
    const handleDeleteAccount = async () => {
        if (!user) {
            alert("No user is currently logged in.");
            return;
        }

        try {
            // Send DELETE request to the server with user's email
            const response = await axios.delete('/welcome', {
                data: { email: user.Email }
            });

            if (response.status === 200) {
                alert("Your account has been deleted successfully.");
                localStorage.removeItem('user');
                setUser(null);
                navigate("/"); // Redirect to home or login page
            }
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("There was an error deleting your account. Please try again later.");
        }
    };
    
    return (
        <div className="mainnavbar">
            <div className="topleftsidenavbar">
                <ul>
                    <li><Link to="/welcome"><img src={imglog} alt="" className="mainnavbarimglog" /></Link></li>
                    <Link to="" className="linknewproject">
                        <div className="newproject">
                            <li><GoFileDirectoryFill /> New Project</li>
                        </div>
                    </Link>
                </ul>
            </div>

            <div className="centermainnavbar">
                <label>
                    <input className="seachinput" type="text" placeholder="Search for Products, tools and more" />
                </label>
                <div className="searchicon"><FiSearch /></div>
            </div>

            <div className="toprightsidenavbar">
                <ul>
                    <li><Link to="/welcome/pagenotfound" className="help"><img src={help} className="righticons" /></Link></li>
                    <li><Link className="notifications"><img src={notifications} className="righticons" /></Link></li>
                    <li className="profile" onClick={toggleDropdown}>
                        <img src={profile_pic} alt="" className="righticons" />
                    </li>
                </ul>
            </div>
            {isDropdownVisible && (
                <div className="profile-dropdown" ref={dropdownRef}>
                    <div className="profile-dropdown-content">
                        {user ? (
                            <>
                                <img src={profile_pic} alt="Profile" className="dropdown-profile-pic" />
                                <div className="profile-details">
                                    <h4>{user.Username}</h4>
                                    <p>{user.Email}</p>
                                </div>
                                <div className="specialbuttons">
                                    {/* <button className="profile-dropdown-content-manage-account-btn" onClick={navprofile}>Manage Account</button> */}
                                    <button className="profile-dropdown-content-manage-account-btn" onClick={handleDeleteAccount}>Delete Account</button>
                                    <button className="profile-dropdown-content-manage-account-btn" onClick={handleLogout}>Log out</button>
                                </div>
                            </>
                        ) : (
                            <div>
                                <img src={profile_pic} alt="Profile" className="dropdown-profile-pic" />
                                <div className="profile-details">
                                    <h4>Guest</h4>
                                    <p>Guest@Guest</p>
                                </div>
                                <div className="specialbuttons">
                                    <button className="profile-dropdown-content-manage-account-btn" onClick={() => navigate("/login")}>Login</button>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mainnav;
