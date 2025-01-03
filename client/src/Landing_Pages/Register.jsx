import React, { useState } from "react";
import './Login.css';
import imglog from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {

    const [User, setUser] = useState({
        Username: "",
        Email: "",
        Password: "",
    });

    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!isChecked) {
            alert("You must agree to the terms & conditions.");
            return;
        }

        if (!User.Username || !User.Email || !User.Password) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(User),
            });
    
            const data = await response.json(); 

            if (response.status === 200) {
                alert(data.message);
                navigate('/login');
            } 
            else if(response.status === 409){
                alert(data.message);
                navigate('/login');
            }
            else if (response.status === 400) {
                alert("Bad request. Please check your data.");
            } 
            else {
                alert(data.message || "An error occurred. Please try again.");
            }
        } catch (err) {
            alert("An error occurred. Please try again.");
            console.error(err);
        }

        console.log(User);
    };

    return (
        <div className="widthandheight">
            <div className="fullscreen">
                <div className="wrapper newregister">
                    <div className="form-box login">
                        <form onSubmit={handleSubmit}>
                            <div className="divlogin">
                                <img src={imglog} alt="" className="imglog" />
                                <h1>Register</h1>
                            </div>

                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="Username"
                                    value={User.Username}
                                    autoComplete="off"
                                    onChange={handleInputChange}
                                    required
                                />
                                <FaUser className="icon" />
                            </div>

                            <div className="input-box">
                                <input
                                    type="email"
                                    placeholder="Email Id"
                                    name="Email"
                                    value={User.Email}
                                    autoComplete="off"
                                    onChange={handleInputChange}
                                    required
                                />
                                <FaEnvelope className="icon" />
                            </div>

                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="Password"
                                    value={User.Password}
                                    autoComplete="off"
                                    onChange={handleInputChange}
                                    required
                                />
                                <FaLock className="icon" />
                            </div>

                            <div className="remember-forgot">
                                <label className="bigcheckbox" htmlFor="checkbox">
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        id="checkbox"
                                        name="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    I Agree to the terms & conditions
                                </label>
                            </div>

                            <button className="loginsubmit" type="submit">Sign Up</button>

                            <div className="register-link">
                                <p>Already have an account? <Link className="Link-tag2" to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
