import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import networking from '../Assets/networking.png';
import { GoLinkExternal } from "react-icons/go";
import DNS from "../Assets/DNS.png";
import ncc from "../Assets/ncc.png";
import psc from "../Assets/psc.png";
import nic from "../Assets/nic.png";
import connectivity from "../Assets/connectivity.png";
import vpc from "../Assets/vpc.png";

const Networking = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={networking} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Networking</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Networking Enabled"); }
                            }>ENABLE</button>

                            <button className="trythisapi buttonfixedstyle" onClick={() => { alert("API IS STILL IN DEVELOPMENT STAGE"); }
                            }>TRY THIS API</button>
                        </div>
                    </div>
                </div>
                <div className="productdownside">
                    <div className="productdownsideone">
                        <div>
                            <h3>Overview</h3>
                            <p>A data platform for customers to create, manage, share and query data.</p>
                        </div>
                        <div className="additionaldetails">
                            <h3>Additional details</h3>
                            <span>Type: <span className="colorblue">SaaS & APIs</span></span>
                            <p>Last product update: --</p>
                            <span>Category: <span className="colorblue">Big data, Carbon Enterprise APIs</span></span>
                            <span>Service name: <span className="colorblue">networking.carboncloud.com</span></span>
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
                                            <img src={connectivity} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cloud Connectivity</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Carbon Cloud offers high-performance connectivity solutions, including VPN, interconnect, and peering.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={vpc} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Virtual Private Cloud (VPC)</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan"> Carbon Cloud VPC offers secure networking with control over IPs, routes, and VPN.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={DNS} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cloud DNS</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan"> Cloud DNS is a scalable, managed service for domain-to-IP translation..</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={ncc} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Network Connectivity Center</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Network Connectivity Center simplifies managing on-premises and cloud networks via centralized hub.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={psc} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Private Service Connect</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Network Connectivity Center enables seamless management of on-premises and cloud networks via centralized hub.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={nic} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Network Intelligence Center</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Network Intelligence Center provides monitoring, verification, and insights to optimize network security and performance.</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Networking;