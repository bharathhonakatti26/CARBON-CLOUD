import React from "react";
import { Link } from "react-router-dom";
import "./Mainwebsite.css";
import cloud_comp from '../Assets/cloud_comp.png';
import big_data from '../Assets/big_data.png';
import networking from '../Assets/networking.png';
import database from '../Assets/database.png';
import ai from '../Assets/ai.png';
import engine from '../Assets/engine.jpg';
import api from '../Assets/api.png';
import monitoring from '../Assets/monitoring.png';
import { AiOutlineProduct } from "react-icons/ai";

function Mainwebsite() {
    return (
        <>
            <div className="fullsite">
                <div className="mainwebsite">
                    <div className="mainwebsite__header">
                        <h1 className="mainwebsite__title">Welcome </h1>
                    </div>
                    <div className="mainwebsite__link">
                        <Link to="/welcome/pagenotfound" className="dashboard mainwebsitelinkborder">Dashboard</Link>
                        <Link to="/welcome/pagenotfound" className="recommendations mainwebsitelinkborder">Recommendations</Link>
                    </div>
                    <div className="compoboxes">
                        <Link className="compoboxstyle" to="/welcome/TryCarbonIQ"><div className="firstcompbox comboxmargin">Try CarbonIQ</div></Link>
                        <Link className="compoboxstyle" to="/welcome/pagenotfound"><div className="tricompbox comboxmargin">Create a Storage Bucket</div></Link>
                        <Link className="compoboxstyle" to="/welcome/pagenotfound"><div className="seccompbox comboxmargin">Create VM</div></Link>
                        <Link className="compoboxstyle" to="/welcome/pagenotfound"><div className="fourcompbox comboxmargin">Try Engine</div></Link>
                    </div>
                    <div className="midbox">
                        <h2 className="trymore">Products</h2>
                        <div className="midboxcontainer">
                            <div className="midboxcontainertop">
                                <Link to="/welcome/Products/Discovery Engine">
                                    <div className="borderbox">
                                        <img src={engine} alt="" className="boximg" />
                                        <h4>Discovery Engine</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/BigQuery">
                                    <div className="borderbox">
                                        <img src={big_data} alt="" className="boximg" />
                                        <h4>BigQuery</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/Networking">
                                    <div className="borderbox">
                                        <img src={networking} alt="" className="boximg" />
                                        <h4>Networking</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/Database">
                                    <div className="borderbox">
                                        <img src={database} alt="" className="boximg" />
                                        <h4>Databases</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="midboxcontainertop margin-top">
                                <Link to="/welcome/Products/Artificial Intelligence">
                                    <div className="borderbox">
                                        <img src={ai} alt="" className="boximg" />
                                        <h4>Artificial Intelligence</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/Cloud Storage">
                                    <div className="borderbox">
                                        <img src={cloud_comp} alt="" className="boximg" />
                                        <h4>Cloud Storage</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/Integration Services">
                                    <div className="borderbox">
                                        <img src={api} alt="" className="boximg" />
                                        <h4>Integration services</h4>
                                    </div>
                                </Link>
                                <Link to="/welcome/Products/Monitoring">
                                    <div className="borderbox">
                                        <img src={monitoring} alt="" className="boximg" />
                                        <h4>Monitoring</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="viewallproducts">
                        <Link>
                            <div className="viewallproductstext">
                                <AiOutlineProduct className="viewallproductsicon" />
                                <p>View all 200+ products</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainwebsite;