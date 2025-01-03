import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import database from '../Assets/database.png';
import { GoLinkExternal } from "react-icons/go";
import Mongo from "../Assets/mongo.png";
import maria from "../Assets/maria.png";
import fauna from "../Assets/fauna.png";
import aero from "../Assets/aero.png";
import byte from "../Assets/byte.png";
import tg from "../Assets/tg.png";

const Database = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={database} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Databases</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Databases Enabled"); }
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
                            <span>Service name: <span className="colorblue">Database.carboncloud.com</span></span>
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
                                            <img src={Mongo} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">MongoDB Atlas</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">MongoDB Atlas and Carbon Cloud provide a scalable, secure platform for intelligent applications.
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={tg} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">PostgreSQL Armored by SG</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">PostgreSQL Armored by SG provides enhanced security for PostgreSQL data in the cloud.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={maria} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">MariaDB Managed Database</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">MariaDB offers scalable, cloud-automated databases, saving up to 90% in costs.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={fauna} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Fauna</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">FaunaDB is a distributed, secure, scalable database for multi-cloud environments.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={aero} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Aerospike Database</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">Aerospike is an enterprise-grade NoSQL database offering real-time performance and scalability.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={byte} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Bytebase</h4>
                                            <p className="colorblue">Carbon Enterprise Database</p>
                                            < span className="smallcompspan">Bytebase is a collaborative database tool with version control and GitOps integration.</span>
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

export default Database;