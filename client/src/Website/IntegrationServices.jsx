import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import api from '../Assets/api.png';
import { GoLinkExternal } from "react-icons/go";
import management from "../Assets/management.png";
import uie from "../Assets/uid.png";
import plug from "../Assets/plug.png";
import mapping from "../Assets/datamaping.png";
import custom from "../Assets/custom.png";
import event from "../Assets/event.png"

const Integration = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={api} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Integration Services</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Integration Services Enabled"); }
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
                            <p>Connect data and applications sources to seamlessly build integrations without siloed and overlapping development</p>
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
                                            <img src={management} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Apigee API Management</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">Manage the full life cycle of APIs anywhere with visibility and control.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={uie} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Unified Integration editor</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">An intuitive drag-and-drop interface that lets you design and develop your entire integration flow with little or no code. </span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={plug} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Plug and play connectors</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">A growing library of pre-built connectors to connect to various Google Cloud services and other business applications.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={mapping} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Data Mapping and Transformations</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">A visual data mapping editor with comprehensive mapping functions to address complex data transformation requirements in no time.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={custom} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Custom configurable tasks</h4>
                                            <p className="colorblue">Carbon Enterprise</p>
                                            < span className="smallcompspan">Built-in tasks to define individual actions within an integration to facilitate seamless data transfer, communication, and synchronization between applications.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={event} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Event driven triggers</h4>
                                            <p className="colorblue">Carbon Enterprise</p>
                                            < span className="smallcompspan">Out-of-the-box triggers that let you initiate and automate the execution of the configured tasks in an integration.</span>
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

export default Integration;