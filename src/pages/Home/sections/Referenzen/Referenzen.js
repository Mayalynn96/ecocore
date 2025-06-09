import React from 'react';
import { useNavigate } from "react-router-dom";
import './Referenzen.css'
import Logo from '../../logo.svg';
import RightArrow from "../../arrow-right.svg";
import Example1 from "./Example1.webp";
import Example2 from "./Example2.webp";
import Example3 from "./Example3.webp"
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


function Referenzen() {
    const images = [
        {
            original: Example1,
            description: "EFH Arlesheim 2014/17",
            originalAlt: "example1"
        },
        {
            original: Example2,
            description: "Waldenburg 2016",
            originalAlt: "example2"
        },
        {
            original: Example3,
            description: "Projekt Riehen 2017",
            originalAlt: "example3"
        },
    ];

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='referenzenSection'>
            <h1>Referenzen</h1>
            <ImageGallery items={images} size={'30vw'} />
            <img src={Logo} alt='Logo'id='logo2' className='backgroundSunIcon'/>
            <div>
                <button onClick={() => handleNavigation("referenzen")}>Mehr Referenzen</button>
            </div>
        </section>
    )
};

export default Referenzen