import React from 'react';
import { useNavigate } from "react-router-dom";
import './Referenzen.css'
import Logo from '../../logo.svg';
import RightArrow from "../../arrow-right.svg";
import Example1 from "./Example1.jpg";
import Example2 from "./Example2.jpg";
import Example3 from "./Example3.jpg"
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


function Referenzen() {
    const images = [
        {
            original: Example1,
            description: "EFH Arlesheim 2014/17"
        },
        {
            original: Example2,
            description: "Waldenburg 2016"
        },
        {
            original: Example3,
            description: "Projekt Riehen 2017"
        },
    ];

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='referenzenSection'>
            <ImageGallery items={images} size={'30vw'} />
            <img src={Logo} alt='Logo'id='logo2'/>
            <div className='mehrDiv' onClick={() => handleNavigation("referenzen")}>
                <p>Mehr Referenzen</p>
                <img src={RightArrow} alt='right pointing arrow' className='rightArrow' />
            </div>
        </section>
    )
};

export default Referenzen