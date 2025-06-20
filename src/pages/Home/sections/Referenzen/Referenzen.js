import React from 'react';
import { useNavigate } from "react-router-dom";
import './Referenzen.css'
import Logo from './halfSun.webp';
import Example1 from "./ReferenzBilder/img01.webp";
import Example2 from "./ReferenzBilder/img02.webp";
import Example3 from "./ReferenzBilder/img03.webp";
import Example4 from "./ReferenzBilder/img04.webp";
import Example5 from "./ReferenzBilder/img05.webp";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


function Referenzen() {

    const images = [
        {
            original: Example1,
            originalAlt: "example1"
        },
        {
            original: Example2,
            originalAlt: "example2"
        },
        {
            original: Example3,
            originalAlt: "example3"
        },
        {
            original: Example4,
            originalAlt: "example4"
        },
        {
            original: Example5,
            originalAlt: "example5"
        }
    ];

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='referenzenSection'>
            <h1>Referenzen</h1>
            <div id="imageGalleryHome">
                <ImageGallery items={images} size={'30vw'} />
            </div>
            <img src={Logo} alt='Logo'id='logo2' className='backgroundSunIconRight'/>
            <div>
                <button onClick={() => handleNavigation("referenzen")}>Mehr Referenzen</button>
            </div>
        </section>
    )
};

export default Referenzen