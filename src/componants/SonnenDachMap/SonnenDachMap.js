import React, {useEffect} from 'react';
import './SonnenDachMap.css'

function SonnenDachMap({isOpen, setIsOpen}) {
    // Adding useNavigate to navigate to homepage
    const closeSonnenDachMap = () => {
        setIsOpen(false)
    }

    useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

    if(isOpen){
        return (
        <div id='SonnenDachMapBackground'>
            <div id='SonnenDachMapMainDiv'>
                <div>
                    <h2>Sonnendach Map</h2>
                    <iframe id='sonnendachCH' title="sonnendachMap" src='//www.uvek-gis.admin.ch/BFE/sonnendach/loader.html?E=2660000&N=1190000&zoom=1&lang=de'></iframe>
                </div>
                <button onClick={closeSonnenDachMap}>Schliessen</button>
            </div>
        </div>
    )
    } else {
        return null
    }
}

export default SonnenDachMap