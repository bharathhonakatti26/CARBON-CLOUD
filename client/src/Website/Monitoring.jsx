import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import monitoring from '../Assets/monitoring.png';
import { GoLinkExternal } from "react-icons/go";
// import Cloud_Build_API from "../Assets/Cloud_Build_API.png";
// import Kubernetes_Engine_API from "../Assets/Kubernetes_Engine_API.jpg";
// import Carbon_Drive_API from "../Assets/Carbon_Drive_API.png";
// import Manager_API from "../Assets/Manager_API.png";
// import Cloud_DNS_API from "../Assets/Cloud_DNS_API.jpg";

const Monitoring = () => {
    return (
        <>
            <div className="productpage">
                <div className="producttopside">
                    <img src={monitoring} alt="" className="productenginimg" />
                    <div className="productengintext">
                        <h2>Monitoring</h2>
                        <p className="colorblue">Carbon Api</p>
                        <div className="buttonofproducts">
                            <button className="enable buttonfixedstyle" onClick={() => { alert("Monitoring Enabled"); }
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
                            <p>Gain visibility into the performance, availability, and health of your applications and infrastructure</p>
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
                                            {/* <img src={Cloud_Build_API} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">Synthetic monitoring</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">Automate web app and API tests, monitor performance, detect regressions, and set proactive alerts for issues..</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            {/* <img src={Kubernetes_Engine_API} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">SLO monitoring</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">Automatically infer or custom define service-level objectives (SLOs) for applications and get alerted when SLO violations occur.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            {/* <img src={Carbon_Drive_API} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">Custom metrics</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">Instrument your application to monitor application and business-level metrics via Cloud Monitoring.</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            {/* <img src={Manager_API} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">Managed Service for Prometheus</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">Monitor and alert on your workloads, using Prometheus, without having to manually manage and operate Prometheus at scale.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            {/* <img src={Cloud_DNS_API} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">Ops Agent</h4>
                                            <p className="colorblue">Carbon Enterprise </p>
                                            < span className="smallcompspan">
                                            Deploy Ops Agent on  Cloud VMs to collect metrics, logs; follow step-by-step in-console tutorial.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            {/* <img src={engine} alt="" className="smallcompimg" /> */}
                                            <h4 className="smallcomphead">Logging integration</h4>
                                            <p className="colorblue">Carbon Cloud</p>
                                            < span className="smallcompspan">Drill down from dashboards and charts to logs. Create, visualize, and alert on metrics based on log data.</span>
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

export default Monitoring;