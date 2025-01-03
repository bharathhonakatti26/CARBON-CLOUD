import React, { useState } from "react";
import './Login.css';
import imglog from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';

function Login() {
    const [User, setUser] = useState({
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

        const { Email, Password } = User;

        try {
            const response = await axios.post("http://localhost:5000/login", {
                Email,
                Password
            });

            if (response.data.message === "Login successful!") {
                const { Username, Email } = response.data.user;

                localStorage.setItem('user', JSON.stringify({ Username, Email }));
                alert("Login successful!");
                navigate("/welcome");
            } else {
                alert(response.data.message || "Invalid Email or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Email not found, please register yourself.");
            navigate("/register");
        }
    };

    const handleGoogleLoginSuccess = async (response) => {
        console.log(response);

        try {
            const res = await axios.post('http://localhost:5000/google-login', {
                token: response.credential,
            });

            if (res.data.message === "Login successful!" || res.data.message === "Google login successful") {
                const { Username, Email } = res.data.user;
                localStorage.setItem('user', JSON.stringify({ Username, Email }));
                alert("Login successful!");
                navigate("/welcome");
            }

            else {
                alert(res.data.message || "Google login failed.");
            }
        }
        catch (error) {
            console.error("Google login error:", error);
            alert("Error logging in with Google.");
        }
    };

    const handleGoogleLoginFailure = (error) => {
        console.error("Google login failed:", error);
        alert("Google login failed, please try again.");
    };

    return (
        <div className="widthandheight">
            <div className="fullscreen">
                <div className="wrapper">
                    <div className="form-box login">
                        <form onSubmit={handleSubmit}>
                            <div className="divlogin">
                                <img src={imglog} alt="logo" className="imglog" />
                                <h1>Login</h1>
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
                                <FaUser className="icon" />
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
                                    Remember me
                                </label>
                                <Link className="Link-tag" to="">Forgot password?</Link>
                            </div>

                            <button className="loginsubmit" type="submit">Login</button>

                            <div className="googlelogin">
                                <GoogleLogin
                                    onSuccess={handleGoogleLoginSuccess}
                                    onError={handleGoogleLoginFailure}
                                    clientId="392493820492-6gfqm2ttjc60nv8dc0uv2i45t34nk0f5.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                        <button
                                            className="google-login-btn"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            Login with Google
                                        </button>
                                    )}
                                />
                            </div>

                            <div className="register-link">
                                <p>Don't have an account? <Link className="Link-tag2" to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
