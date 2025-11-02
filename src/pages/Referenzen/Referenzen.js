import React, {useEffect} from 'react';
import Header from '../../componants/Header/Header';
import "./Referenzen.css"
import Carousel from '../../componants/Carousel/Carousel';
import Footer from '../../componants/Footer/Footer';
import ArlesheimIMG01 from './Arlesheim/IMG_01.jpg';
import ArlesheimIMG02 from './Arlesheim/IMG_02.jpg';
import ArlesheimIMG03 from './Arlesheim/IMG_03.jpg';
import EFHArlesheimIMG01 from './EFHArlesheim/IMG_01.jpg';
import EFHArlesheimIMG02 from './EFHArlesheim/IMG_02.jpg';
import EFHArlesheimIMG03 from './EFHArlesheim/IMG_03.jpg';
import EFHArlesheimIMG04 from './EFHArlesheim/IMG_04.jpg';
import EFHArlesheimIMG05 from './EFHArlesheim/IMG_05.jpg';
import EFHArlesheimIMG06 from './EFHArlesheim/IMG_06.jpg';
import BaselIMG01 from './Basel/IMG_01.jpg';
import BaselIMG02 from './Basel/IMG_02.jpg';
import BaselIMG03 from './Basel/IMG_03.jpg';
import BaselIMG04 from './Basel/IMG_04.jpg';
import RiehenIMG01 from './Riehen/IMG_01.jpg';
import RiehenIMG02 from './Riehen/IMG_02.jpg';
import RiehenIMG03 from './Riehen/IMG_03.jpg';
import RiehenIMG04 from './Riehen/IMG_04.jpg';
import RiehenIMG05 from './Riehen/IMG_05.jpg';
import LaufenstrasseIMG01 from './Laufenstrasse/IMG_01.jpg';
import LaufenstrasseIMG02 from './Laufenstrasse/IMG_02.jpg';
import LaufenstrasseIMG03 from './Laufenstrasse/IMG_03.jpg';
import LaufenstrasseIMG04 from './Laufenstrasse/IMG_04.jpg';
import WaldenburgIMG01 from './Waldenburg/IMG_01.jpg';
import WaldenburgIMG02 from './Waldenburg/IMG_02.jpg';
import WaldenburgIMG03 from './Waldenburg/IMG_03.jpg';
import Partner from '../../componants/Partner/Partner';
import RheinfeldenEinfamilienhaus01 from './Rheinfelden Einfamilienhaus/Rheinfelden1.jpg';
import RheinfeldenEinfamilienhaus02 from './Rheinfelden Einfamilienhaus/Rheinfelden2.jpg';
import RheinfeldenEinfamilienhaus03 from './Rheinfelden Einfamilienhaus/Rheinfelden3.jpg';
import RheinfeldenNeubauIMG01 from './RheinfeldenNeubau/Rheinfelden Neubau 1.jpg';
import RheinfeldenNeubauIMG02 from './RheinfeldenNeubau/Rheinfelden Neubau 2.jpg';
import RheinfeldenNeubauIMG03 from './RheinfeldenNeubau/Rheinfelden Neubau 3.jpg';
import FehraltorfIMG01 from './Fehraltorf Einfamilienhaus/Fehraltorf 1.jpg';
import FehraltorfIMG02 from './Fehraltorf Einfamilienhaus/Fehraltorf 2.jpg';
import FehraltorfIMG03 from './Fehraltorf Einfamilienhaus/Fehraltorf 3.jpg';
import WallbachIMG01 from './Wallbach/Wallbach 1.jpg';
import WallbachIMG02 from './Wallbach/Wallbach 2.jpg';
import WallbachIMG03 from './Wallbach/Wallbach 3.jpg';
import MöhlinIMG01 from './Möhlin/Möhlin Indach 1.jpg';
import MöhlinIMG02 from './Möhlin/Möhlin Indach 2.jpg';
import MöhlinIMG03 from './Möhlin/Möhlin Indach 3.jpg';

function Referenzen() {
    useEffect(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            const href = window.location.href.substring(
                window.location.href.lastIndexOf('#') + 1,
            );
            if (window.location.href.lastIndexOf('#') > 0) {
                document.getElementById(href)?.scrollIntoView();
            }
        })
    const data = [
        {
            project: "Rheinfelden – Bestehendes Einfamilienhaus",
            text: `<p>Aufdach-Anlage mit 28 kWp Leistung, volloptimiert, mit 18 kWh Speicher und integriertem Backup-System.</p>`,
            imgs: [
                {
                    src: RheinfeldenEinfamilienhaus02,
                    alt: 'Rheinfelden Projekt Photo 1',
                    id: 26,
                },
                {
                    src: RheinfeldenEinfamilienhaus01,
                    alt: 'Rheinfelden Projekt Photo 2',
                    id: 27,
                },
                {
                    src: RheinfeldenEinfamilienhaus03,
                    alt: 'Rheinfelden Projekt Photo 3',
                    id: 28,
                }
            ]
        },
        {
            project: "Rheinfelden - Neubau",
            text: `<p>Flachdach-Anlage mit 18 kWp Leistung, teiloptimiert, mit Energiemanagement und Wärmepumpe.</p>`,
            imgs: [
                {
                    src: RheinfeldenNeubauIMG01,
                    alt: 'Rheinfelden Neubau Projekt Photo 1',
                    id: 29,
                },
                {
                    src: RheinfeldenNeubauIMG02,
                    alt: 'Rheinfelden Neubau Projekt Photo 2',
                    id: 30,
                },
                {
                    src: RheinfeldenNeubauIMG03,
                    alt: 'Rheinfelden Neubau Projekt Photo 3',
                    id: 31,
                }
            ]
        },
        {
            project: "Fehraltorf - Einfamilienhaus",
            text: `<p>Aufdach-Anlage mit 18.9 kWp Leistung, volloptimiert, mit 14 kWh Speicher und Backup-Box.</p>`,
            imgs: [
                {
                    src: FehraltorfIMG01,
                    alt: 'Fehraltorf Einfamilienhaus Projekt Photo 1',
                    id: 32,
                },
                {
                    src: FehraltorfIMG02,
                    alt: 'Fehraltorf Einfamilienhaus Projekt Photo 2',
                    id: 33,
                },
                {
                    src: FehraltorfIMG03,
                    alt: 'Fehraltorf Einfamilienhaus Projekt Photo 3',
                    id: 34,
                }
            ]
        },
        {
            project: "Wallbach – Einfamilienhaus",
            text: `<p>Indach-Anlage mit 15 kWp Leistung, System Huawei.</p>`,
            imgs: [
                {
                    src: WallbachIMG01,
                    alt: 'Wallbach Einfamilienhaus Projekt Photo 1',
                    id: 35,
                },
                {
                    src: WallbachIMG02,
                    alt: 'Wallbach Einfamilienhaus Projekt Photo 2',
                    id: 36,
                },
                {
                    src: WallbachIMG03,
                    alt: 'Wallbach Einfamilienhaus Projekt Photo 3',
                    id: 37,
                }
            ]
        },
        {
            project: "Möhlin – Einfamilienhaus",
            text: `<p>Indach-Anlage mit 12 kWp Leistung, mit 14 kWh Speicher, System Huawei, Energiemanagement für Wärmepumpe und Ladestation.</p>`,
            imgs: [
                {
                    src: MöhlinIMG01,
                    alt: 'Möhlin Projekt Photo 1',
                    id: 38,
                },
                {
                    src: MöhlinIMG02,
                    alt: 'Möhlin Projekt Photo 2',
                    id: 39,
                },
                {
                    src: MöhlinIMG03,
                    alt: 'Möhlin Projekt Photo 3',
                    id: 40,
                }
            ]
        },
        {
            project: "Arlesheim – Einfamilienhaus",
            text: `<p>Aufdach-Anlage mit 24.36 kWp Leistung.</p>`,
            imgs: [
                {
                    src: ArlesheimIMG01,
                    alt: 'Arlesheim Projekt Photo 1',
                    id: 1,
                },
                {
                    src: ArlesheimIMG02,
                    alt: 'Arlesheim Projekt Photo 2',
                    id: 2,
                },
                {
                    src: ArlesheimIMG03,
                    alt: 'Arlesheim Projekt Photo 3',
                    id: 3,
                }
            ]
        },
        {
            project: "Arlesheim – Einfamilienhaus",
            text: `<p>Anbau und Totalsanierung eines EFH von 1946, inklusive Erweiterung um Sockelgeschoss, Wohnraumanbau, Windfang und Wintergarten./p>`,
            imgs: [
                {
                    src: EFHArlesheimIMG01,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 4,
                },
                {
                    src: EFHArlesheimIMG02,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 5,
                },
                {
                    src: EFHArlesheimIMG03,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 6,
                },
                {
                    src: EFHArlesheimIMG04,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 7,
                },
                {
                    src: EFHArlesheimIMG05,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 8,
                },
                {
                    src: EFHArlesheimIMG06,
                    alt: 'EFH Arlesheim Projekt Photo',
                    id: 9,
                }
            ]
        },
        {
            project: 'Basel – Mehrfamilienhaus',
            text: `<p>Ost-West-Flachdachanlage mit 9.74 kWp Leistung, mit SolarEdge Moduloptimierern. Die Module sind europäischer Herkunft.</p>`,
            imgs: [
                {
                    src: BaselIMG01,
                    alt: 'Basel Projekt Photo 1',
                    id: 10
                },
                {
                    src: BaselIMG02,
                    alt: 'Basel Projekt Photo 2',
                    id: 11
                },
                {
                    src: BaselIMG03,
                    alt: 'Basel Projekt Photo 3',
                    id: 12
                },
                {
                    src: BaselIMG04,
                    alt: 'Basel Projekt Photo 4',
                    id: 13
                }
            ]
        },
        {
            project: "Riehen – Zweifamilienhaus",
            text: `<p>Ost-West-Flachdachanlage mit 9.74 kWp Leistung, mit SolarEdge Moduloptimierern. Die Module sind europäischer Herkunft.</p>`,
            imgs: [
                {
                    src: RiehenIMG01,
                    alt: 'Riehn Projekt Photo 1',
                    id: 14
                },
                {
                    src: RiehenIMG02,
                    alt: 'Riehn Projekt Photo 2',
                    id: 15
                },
                {
                    src: RiehenIMG03,
                    alt: 'Riehn Projekt Photo 3',
                    id: 16
                },
                {
                    src: RiehenIMG04,
                    alt: 'Riehn Projekt Photo 4',
                    id: 17
                },
                {
                    src: RiehenIMG05,
                    alt: 'Riehn Projekt Photo 5',
                    id: 18
                }
            ]
        },
        {
            project: 'Basel – Laufenstrasse (Bürogebäude)',
            text: `<p>Aufdach-Anlage mit Ost-West-Ausrichtung und Moduloptimierern. Leistung ca. 17.5 kWp.</p>`,
            imgs: [
                {
                    src: LaufenstrasseIMG01,
                    alt: 'Laufenstrasse Photo 1',
                    id:19
                },
                {
                    src: LaufenstrasseIMG02,
                    alt: 'Laufenstrasse Photo 2',
                    id:20
                },
                {
                    src: LaufenstrasseIMG03,
                    alt: 'Laufenstrasse Photo 3',
                    id:21
                },
                {
                    src: LaufenstrasseIMG04,
                    alt: 'Laufenstrasse Photo 4',
                    id:22
                }
            ]
        },
        {
            project: 'Waldenburg – Einfamilienhaus',
            text: `<p>Indach-Anlage mit 30 kWp Leistung, individuell gestaltete Module, Ost-Ausrichtung, mit Moduloptimierern.</p>`,
            imgs: [
                {
                    src: WaldenburgIMG01,
                    alt: 'Waldenburg Projekt Photo 1',
                    id: 23
                },
                {
                    src: WaldenburgIMG02,
                    alt: 'Waldenburg Projekt Photo 2',
                    id: 24
                },
                {
                    src: WaldenburgIMG03,
                    alt: 'Waldenburg Projekt Photo 3',
                    id: 25
                },
                
            ]
        }
    ]

    return (
        <section id='referenzenPageSection'>
            <Header />
            <main>
                <h1>Referenzen</h1>
                {data.map((referenze, index) => {
                    if ((index % 2) !== 0) {
                        return (
                            <section className='carouselSection reversed' key={index}>
                                <Carousel imgArray={referenze.imgs} imgsId={index}/>
                                <div className='carouselTxtDiv'>
                                    <h2>{referenze.project}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: referenze.text }}></div>
                                </div>
                            </section>
                        )
                    } else {
                        return (
                            <section className='carouselSection' key={index}>
                                <Carousel imgArray={referenze.imgs} imgsId={index} />
                                <div className='carouselTxtDiv'>
                                    <h2>{referenze.project}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: referenze.text }}></div>
                                </div>
                            </section>
                        )
                    }

                })}
            </main>
            <Partner />
            <Footer />
        </section>
    )
}

export default Referenzen