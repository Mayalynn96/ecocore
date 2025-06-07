import React from 'react';
import "./Partner.css"
import Screenshot1 from './Screenshot1.webp'
import Screenshot2 from './Screenshot2.webp'
import Screenshot3 from './Screenshot3.webp'
import Screenshot4 from './Screenshot4.webp'
import Screenshot5 from './Screenshot5.webp'
import Screenshot6 from './Screenshot6.webp'
import Screenshot7 from './Screenshot7.webp'

function Partner() {

    return (
        <div class="logos">
            <div class="logo-slider">
                <img src={Screenshot1} alt="Studio Schaffer Basel" className='logoImg' />
                <img src={Screenshot2} alt="EcoInvest" className='logoImg' />
                <img src={Screenshot3} alt="My Way Better Biking" className='logoImg' />
                <img src={Screenshot4} alt="Tesla" className='logoImg' />
                <img src={Screenshot5} alt="Paul Ullrich AG" className='logoImg' />
                <img src={Screenshot6} alt="Unser Bier" className='logoImg' />
                <img src={Screenshot7} alt="Global Footprint Network" className='logoImg' />
            </div>
            <div class="logo-slider">
                <img src={Screenshot1} alt="Studio Schaffer Basel" className='logoImg' />
                <img src={Screenshot2} alt="EcoInvest" className='logoImg' />
                <img src={Screenshot3} alt="My Way Better Biking" className='logoImg' />
                <img src={Screenshot4} alt="Tesla" className='logoImg' />
                <img src={Screenshot5} alt="Paul Ullrich AG" className='logoImg' />
                <img src={Screenshot6} alt="Unser Bier" className='logoImg' />
                <img src={Screenshot7} alt="Global Footprint Network" className='logoImg' />
            </div>
        </div>
    )
}

export default Partner