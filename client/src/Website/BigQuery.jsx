import React from "react";
import { Link } from "react-router-dom";
import './Discoveryengine.css';
import engine from '../Assets/big_data.png';
import { GoLinkExternal } from "react-icons/go";
import cdc from "../Assets/cdc.png";
import nyc from "../Assets/nyc.jpg";
import gsod from "../Assets/gsod.png";
import ie from "../Assets/ie.png";
import warehouse from "../Assets/warehouse.png";
import datalake from "../Assets/datalake.webp";
import { useState } from "react"; 

const Discoveryengine = () => {

    // State to track whether the ENABLE button has been clicked
    const [isEnabled, setIsEnabled] = useState(false);

    // Handle ENABLE button click
    const handleEnableClick = () => {
        alert("BigQuery Enabled");
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
                        <h2>BigQuery</h2>
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
                            <p>A data platform for customers to create, manage, share and query data.</p>
                        </div>
                        <div className="additionaldetails">
                            <h3>Additional details</h3>
                            <span>Type: <span className="colorblue">SaaS & APIs</span></span>
                            <p>Last product update: --</p>
                            <span>Category: <span className="colorblue">Big data, Carbon Enterprise APIs</span></span>
                            <span>Service name: <span className="colorblue">bigquery.carboncloud.com</span></span>
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
                                            <img src={warehouse} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Data warehouse with BigQuery</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Build and analyse structured and unstructured data with a data warehouse and generative AI</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={datalake} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Analytics lakehouse</h4>
                                            <p className="colorblue">Carbon Enterprise API</p>
                                            < span className="smallcompspan">Use generative AI to analyse big data with different formats in an analytics lakehouse</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={cdc} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">Births Data Summary</h4>
                                            <p className="colorblue">Centers for Disease Control</p>
                                            < span className="smallcompspan">Natality Data from CDC Births</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bigproductbox">
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={nyc} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">NYC Street Trees</h4>
                                            <p className="colorblue">City of New York</p>
                                            < span className="smallcompspan">New York City Street Tree Census data</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={gsod} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">GSOD</h4>
                                            <p className="colorblue">NOAA</p>
                                            < span className="smallcompspan">Global Surface Summary of the Day Weather Data.</span>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className="smallcomp">
                                            <img src={ie} alt="" className="smallcompimg" />
                                            <h4 className="smallcomphead">International Education</h4>
                                            <p className="colorblue">The World Bank</p>
                                            < span className="smallcompspan">Key international education statistics</span>
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

export default Discoveryengine;