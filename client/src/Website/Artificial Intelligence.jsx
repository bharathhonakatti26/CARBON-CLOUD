import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import AI from '../Assets/ai.png';
import { GoLinkExternal } from "react-icons/go";
import cogent from "../Assets/cogent.png";
import Baioniq from "../Assets/Baioniq.png";
import Livex from "../Assets/Livex.png";
import R10 from "../Assets/R10.png";
import gretel from "../Assets/gretel.png";
import arize from "../Assets/arize.png";

const ArtificialIntelligence = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={AI} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Artificial Intelligence</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Artificial Intelligence Enabled"); }
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
                            <span>Service name: <span className="colorblue">ArtificialIntelligence.carboncloud.com</span></span>
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
                                            <img src={cogent} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cogent</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">Build intelligent, interactive problem-solving applications that deliver unprecedented accuracy.
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={arize} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Arize AI</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">Machine learning observability and model monitoring platform for performance management and RCA.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Baioniq} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Baioniq</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">The Enterprise Ready Generative AI Platform Solution</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Livex} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">LiveX AI Agent</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">LiveX AI Agents personalize customer interactions, enhancing service and customer satisfaction.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={R10} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">R10 Gen AI Assistant</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">R10 is a Generative AI platform that personalizes, adapts, and enables meaningful, bidirectional conversations across platforms.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={gretel} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Gretel.ai</h4>
                                            <p className="colorblue">Carbon Enterprise AI</p>
                                            < span className="smallcompspan">Gretel's APIs create accurate, scalable, privacy-safe synthetic datasets for sharing.</span>
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

export default ArtificialIntelligence;