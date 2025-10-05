import React from 'react';
import { useNavigate } from "react-router-dom";
import './Referenzen.css'
import Logo from './halfSun.webp';
import Example1 from "./ReferenzBilder/img01.webp";
import Example2 from "./ReferenzBilder/img02.webp";
import Example3 from "./ReferenzBilder/img03.webp";
import Example4 from "./ReferenzBilder/img04.webp";
import Example5 from "./ReferenzBilder/img05.webp";
import Carousel from '../../../../componants/Carousel/Carousel';


function Referenzen() {

    const data = {

            imgs: [
                {
                    src: Example1,
                    alt: 'Arlesheim Projekt Photo 1',
                    id: 1,
                },
                {
                    src: Example2,
                    alt: 'Arlesheim Projekt Photo 2',
                    id: 2,
                },
                {
                    src: Example3,
                    alt: 'Arlesheim Projekt Photo 3',
                    id: 3,
                },
                {
                    src: Example4,
                    alt: 'Arlesheim Projekt Photo 4',
                    id: 4,
                },
                {
                    src: Example5,
                    alt: 'Arlesheim Projekt Photo 5',
                    id: 5,
                }
            ]
        };

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <section id='referenzenSection'>
            <h1>Referenzen</h1>
            <div id="imageGalleryHome">
                <Carousel imgArray={data.imgs} />
            </div>
            <img src={Logo} alt='Logo'id='logo2' className='backgroundSunIconRight'/>
            <div>
                <button onClick={() => handleNavigation("referenzen")}>Mehr Referenzen</button>
            </div>
        </section>
    )
};

export default Referenzen