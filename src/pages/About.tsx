import React from 'react';
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: '20px' }}>
            <h1>About Page</h1>
            <p>This is the about page!</p>
            <div style={{ height: '1500px', background: '#d0d0d0' }}>
                <p>Scroll down to test scroll restoration on navigation.</p>
            </div>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
};

export default About;
