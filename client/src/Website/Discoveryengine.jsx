import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import engine from '../Assets/engine.jpg';
import { GoLinkExternal } from "react-icons/go";
import Cloud_Build_API from "../Assets/Cloud_Build_API.png";
import Kubernetes_Engine_API from "../Assets/Kubernetes_Engine_API.jpg";
import Carbon_Drive_API from "../Assets/Carbon_Drive_API.png";
import Manager_API from "../Assets/Manager_API.png";
import Cloud_DNS_API from "../Assets/Cloud_DNS_API.jpg";

const Discoveryengine = () => {
    // State to track whether the ENABLE button has been clicked
    const [isEnabled, setIsEnabled] = useState(false);

    // Handle ENABLE button click
    const handleEnableClick = () => {
        alert("Discovery Engine Enabled");
        setIsEnabled(true); // Disable the button and change the text after it's clicked
    };

    // Handle TRY THIS API button click
    const handleTryApiClick = () => {
        alert("API IS STILL IN DEVELOPMENT STAGE");
    };

    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={engine} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Discovery Engine</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button
                                className="enable buttonfixedstyle"
                                onClick={handleEnableClick}
                                disabled={isEnabled} // Disable the button after it is clicked
                            >
                                {isEnabled ? "DISABLE" : "ENABLE"} {/* Toggle button text */}
                            </button>

                            <button
                                className="trythisapi buttonfixedstyle"
                                onClick={handleTryApiClick}
                            >
                                TRY THIS API
                            </button>
                        </div>
                    </div>
                </div>
                <div className="productdownside">
                    <div className="productdownsideone">
                        <div>
                            <h3>Overview</h3>
                            <p>Creates and runs virtual machines on Carbon Cloud Platform.</p>
                        </div>
                        <div className="additionaldetails">
                            <h3>Additional details</h3>
                            <span>Type: <span className="colorblue">SaaS & APIs</span></span>
                            <p>Last product update: --</p>
                            <span>Category: <span className="colorblue">Compute, Networking, Carbon Enterprise APIs</span></span>
                            <span>Service name: <span className="colorblue">carbon.cloud</span></span>
                        </div>
                    </div>
                    <div className="productdownsidetwo">
                        <div className="onecontainer">
                            <h3>Tutorials and documentation</h3>
                            <div className="othercontainer">
                                <Link className="colorblue hoverlearnmore" >Learn more <GoLinkExternal className="GoLinkExternal" /></Link>
                            </div>
                        </div>
                        <div className="onecontainer">
                            <h3>Support</h3>
                            <div className="othercontainer">
                                <Link className="colorblue hoverlearnmore" >Learn more <GoLinkExternal className="GoLinkExternal" /></Link>
                            </div>
                        </div>
                        <div className="onecontainer">
                            <h3>Terms of Service</h3>
                            <span className="termsandcondi">By using this product, you agree to the terms and conditions of the following licence: <span className="colorblue">Carbon Cloud Platform.</span></span>
                        </div>
                        <div className="onecontainer">
                            <h3>Related products</h3>
                            <span>Customers who use this product also use the following products</span>
                            <div className="bigbigproductbox">
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Cloud_Build_API} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cloud Build API</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            <span className="smallcompspan">Continuously build, test, and deploy.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Kubernetes_Engine_API} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Kubernetes Engine API</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            <span className="smallcompspan">Builds and manages container-based applications, powered by the open source Kubernetes technology.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Carbon_Drive_API} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Carbon Drive API</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            <span className="smallcompspan">Create and manage resources in Carbon Drive.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Manager_API} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Manager API</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            <span className="smallcompspan">Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while…</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Cloud_DNS_API} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cloud DNS API</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            <span className="smallcompspan">Highly Available Global DNS Network .</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={engine} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Compute Engine</h4>
                                            <p className="colorblue">Carbon Cloud</p>
                                            <span className="smallcompspan">Scalable, high-performance virtual machines</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discoveryengine;