import React, { useEffect } from 'react'
import Celetree from '../Media/DMFC.jpg';
import './tabs.css';

function HomeTab() {
    return (
        <div id='home-content' className='tab-page'>
            <div id='home-card' className='card'>
                <img id='homePic' src={Celetree}></img>
            </div>
        </div>
    );
}

export default HomeTab