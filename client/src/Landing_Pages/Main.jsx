import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Main.css';

const main = () => {
    return (
        <>
            <div className="top">
                <div className="oneside">
                    <div className="box">
                        <Link to='/pagenotfound' className="toplink">
                            <p className="highlight">Get $20 in free credits </p>
                            <p style={{ color: "black" }}>and free usage of 10+Products</p>
                            {/* <span className="arrow"><img className="arrowimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAP9JREFUWEftlkEKwjAQRV8vILgTTyeCigvBrbjxBm7EjbrxosqAhSxsk0x+oYV0O23m9f/8SRpG9jQj46ECxRypClWFYgrE6so9dAKWwCHWtK+uAroCx1+jB7D1QqmA7sA+gHBDqYCMRQKlBJJAqYEM6gWsvfYNAWRrPr1QQwCZOF1QO+CjiP3FEWODslEwC7415WwkdEKlKtT7V5mwb2DVBTVZIK9ldozMAwUtgRuFZZmu/N3UvVa1DVItywFyJ6yNZ06z2LtFM2gIoKIprQYa1eEqgVEqFF7QbiW3RmXKzsCiBEapUCx9yXWlQslNFae9pFnKIlWhmEpVockp9AXY9C0lASga0QAAAABJRU5ErkJggg==" /></span> */}
                            <span className="arrow arrowimg" ><FaArrowRight /></span>
                        </Link>
                    </div>
                    <div className="header">
                        <p className="Header">The new way to cloud starts here</p>
                    </div>
                    <div className="Headerpara">Create with generative AI, launch apps effortlessly, and gain insights in seconds—all backed by top-tier security from Carbon Cloud.</div>
                    <div className="buttons">
                        <div><Link className="gofreetoday" to="/pagenotfound">Go Free Today</Link></div>
                        <div><Link className="sayhello" to="/pagenotfound">Say Hello</Link></div>
                    </div>
                </div>
                {/* othersidediv */}
            </div>
            <div className="secondpage">
                <div className="secondpageoneside">
                    <div className="">
                        <h1 className="secondpageheader">Build smarter, scale faster, and collaborate seamlessly in a sustainable cloud environment.</h1>
                    </div>
                    <div className="secondpagepara">Explore Carbon Cloud with free access to a suite of over 20 essential tools, and enjoy $20 in credits when you sign up as a new user.</div>
                    <div className="buttons">
                        {/* <div><Link className="gofreetoday" to="/pagenotfound">Go Free Today</Link></div> */}
                        <div><Link className="seeallpro" to="/pagenotfound">Discover Our 200+ Solutions</Link></div>
                    </div>
                </div>
                <div className="secondpageotherside">
                    <p className="text">AI and machine learning</p>
                    <p className="text">Compute</p>
                    <p className="text">Storage</p>
                    <p className="text">Databases</p>
                    <p className="text">Data analytics</p>
                    <p className="text">Security</p>
                </div>
            </div>
            <div className="thirdpage">
                <div className="">
                    <h1 className="thirdpageheader">Build smarter, scale faster, and collaborate seamlessly in a sustainable cloud environment.</h1>
                </div>
                <div className="thirdpagepara">Whether it’s boosting retail product search or identifying fraudulent transactions, our industry solutions meet your toughest challenges head-on.</div>
                <div className="divgetstartwithademo"><Link className="getstartwithademo" to="/pagenotfound">Get Started with a Demo</Link></div>
            </div>
            <div className="forthpage">
                <div className="forthtopside">
                    <div className="toponeside">
                        <h1 className="topforthpageheader">Empowering Your Business with Cloud Innovation</h1>
                    </div>
                    <div className="topotherside">
                        <p className="topothersidepara">From migration to optimization, we’re here to elevate your business with cloud modernization and digital transformation.</p>
                        <div className="divconnectwithourteam"><Link className="connectwithourteam" to="/pagenotfound">Connect with Our Team</Link></div>
                    </div>
                </div>
                <div className="forthbottomside">
                    <div className="bottombox">
                        <div className="divbottomboxheader"><h3 className="bottomboxheader">Build and Manage Your Apps, Wherever Life Takes You</h3></div>
                        <div className="divbottomboxpara"><p className="bottomboxpara">Eliminate vendor lock-in and accelerate your development with Carbon Cloud’s focus on open-source, hybrid, and multicloud solutions.</p></div>
                    </div>
                    <div className="bottombox">
                        <div className="divbottomboxheader"><h3 className="bottomboxheader">Make Informed Choices with the Premier Data Platform</h3></div>
                        <div className="divbottomboxpara"><p className="bottomboxpara">Enable your team to access valuable business insights with our advanced machine learning and analytics tools.</p></div>
                    </div>
                    <div className="bottombox">
                        <div className="divbottomboxheader"><h3 className="bottomboxheader">Secure Your Most Valuable Assets</h3></div>
                        <div className="divbottomboxpara"><p className="bottomboxpara extrabottomboxpara">Fortify your data and applications against threats and fraud with the same security technology trusted by Carbon.</p></div>
                    </div>
                    <div className="bottombox">
                        <div className="divbottomboxheader"><h3 className="bottomboxheader">Revolutionize team collaboration—no matter where you are.</h3></div>
                        <div className="divbottomboxpara"><p className="bottomboxpara">Streamline video calls, emails, chats, and document collaboration into one convenient space.</p></div>
                    </div>
                </div>
            </div>
            <div className="fifthpage">
                <div className="fifthpagecontent">
                    <h1 className="fifthpageheader">Let’s create the future you envision, starting today</h1>
                </div>
                <div className="fifthpageunderline"></div>
            </div>
        </>
    );
}

export default main;


