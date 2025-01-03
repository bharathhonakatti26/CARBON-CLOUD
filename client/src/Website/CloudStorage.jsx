import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import storage from '../Assets/cloud_comp.png';
import { GoLinkExternal } from "react-icons/go";
import Artifact from "../Assets/artifact.png";
import Firebase from "../Assets/firebase.png";
import DR from "../Assets/dr.png";
import Transfer from "../Assets/appliance.png";
import Filestore from "../Assets/filestore.png";
import Block from "../Assets/BlockStorage.png";

const CloudStorage = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={storage} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Cloud Storage</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Cloud Storage Enabled"); }
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
                            <p>Cloud Storage is a managed service for storing unstructured data. Store any amount of data and retrieve it as often as you like.</p>
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
                                            <img src={Artifact} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Artifact Registry</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">A universal repository manager for container images, OS packages, and language packages that you build and deploy.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Firebase} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Cloud Storage for Firebase</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">Scalable storage for user-generated content from your app.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={DR} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead"> Cloud Backup and DR</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">Managed backup and disaster recovery (DR) service for centralized, application-consistent data protection. </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Transfer} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Transfer Appliance</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">Ruggedized server to collect and physically move data from field locations with limited connectivity or from data centers.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Filestore} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Filestore</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">Fully managed service for file migration and storage. Easily mount file shares on Compute Engine VMs.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={Block} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Hyperdisk, Persistent Disk, and Local SSD</h4>
                                            <p className="colorblue">Carbon Enterprise Storage</p>
                                            < span className="smallcompspan">Reliable, high-performance block storage for virtual machine instances.</span>
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

export default CloudStorage;