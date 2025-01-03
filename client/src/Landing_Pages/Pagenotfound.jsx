import React from "react";
import { useNavigate } from "react-router-dom";
import './Pagenotfound.css';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="widthandheightpagenotfound">
            <div className="error404">
                <div className="error404box">
                    <div className="mainerrorbox">
                        <div className="error4-smallbox">
                            <h1 className="fournotfour">404</h1>
                            <h1 className="pagenotfound">Page not found!</h1>
                        </div>
                        <h3 className="requestedpage">The Requested page not found</h3>
                        <p className="backtohomefrom404" onClick={handleGoBack}>
                            Back to previous page
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
