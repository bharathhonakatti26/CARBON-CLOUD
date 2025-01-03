import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const sendSubscriptionEmail = async (email) => {
    try {
        const response = await emailjs.send(
            'service_8mtkqfn',  
            'template_mxxrfj9',
            { email },         
            '917TQ2LV3HJwCNipL'
        );
        console.log('Email sent successfully', response);
    } catch (error) {
        console.error('Failed to send email', error);
    }
};

const foot = () => {

    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubscribe = async () => {

        const email = prompt('Please enter your email address:');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setError('Please enter a valid email');
            alert('Please enter a valid email!');
            return;
        }

        try {
            setError('');
            await sendSubscriptionEmail(email);
            setIsSuccess(true);
            alert('Subscription successful! A confirmation email has been sent to your address.');
        } catch (err) {
            setError('Failed to subscribe. Please try again later.');
            alert('Failed to subscribe. Please try again later.');
        }
    };

    return (
        <>
            <div className="mainfoot">
                <div className='Foottop'>
                    <div className="mycarbon">
                        <p className="footleftsidehead">Why Carbon</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Choosing Carbon Cloud</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Trust and security</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Open cloud</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Multicloud</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Global infrastructure</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Customers and case studies</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Analyst reports</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Whitepapers</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Blog</Link></p>
                    </div>
                    <div className="Productsandpricing">
                        <p className="footleftsidehead">Products and pricing</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud pricing</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Workspace pricing</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">See all products</Link></p>
                    </div>
                    <div className="Solutions">
                        <p className="footleftsidehead">Solutions</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Infrastructure modernization</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Databases</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Application modernization</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Smart analytics</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Security</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Artificial Intelligence</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Productivity & work transformation</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Industry solutions</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">DevOps solutions</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Small business solutions</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">See all solutions</Link></p>
                    </div>
                    <div className="Resources">
                        <p className="footleftsidehead">Resources</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud Affiliate Program</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud documentation</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud quickstarts</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud Marketplace</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Learn about cloud computing</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Support</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Code samples</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Cloud Architecture Center</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Training</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Certifications</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon for Developers</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud for Startups</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">System status</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Release Notes</Link></p>
                    </div>
                    <div className="Engage">
                        <p className="footleftsidehead">Engage</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Contact sales</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Find a Partner</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Become a Partner</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Events</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Podcasts</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Developer Center</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Press Corner</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud on YouTube</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud Tech on YouTube</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Follow on X</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Join User Research</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound"> We're hiring. Join Carbon Cloud!</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud Community</Link></p>
                    </div>
                </div>
                <div className="footbottom">
                    <div className="footbottomleftside">
                        <p className="footleftsidepara">About Carbon</p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Privacy</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Site terms</Link></p>
                        <p className="footleftsidepara"><Link to="/pagenotfound">Carbon Cloud terms</Link></p>
                    </div>
                    <div className="footerbottomrightside">
                        <div><p className='newsletter'>Join the Carbon Cloud newsletter</p></div>
                        <div className="smallbox"><p><button onClick={handleSubscribe} className="smallbox" >Subscribe</button></p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default foot; 