import React from 'react';
import './IconBox.css'
import { useNavigate } from "react-router-dom";

function IconBox({ icon, text, destination }) {
    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <div onClick={() => handleNavigation(destination)} className='iconDiv'>
            <img src={icon} alt={text} className='iconImage'/>
            <p>{text}</p>
        </div>
    )
}

export default IconBox