import React from 'react';
import { useEffect, useState } from 'react';
import './Header.css';
import CanVid from '../Media/candlevid.mp4';
import PopVid from '../Media/poppyvid.mp4';
import ButVid from '../Media/butterflyvid.mp4';
import CloVid from '../Media/clouds.mp4';
import FloVid from '../Media/flowers.mp4';
import BirVid from '../Media/birds.mp4';
import HeadPic from '../Media/header2.png';

function Header() {

  // Setting the bg
  const videos = [CanVid, PopVid, ButVid, CloVid, FloVid, BirVid];
  const [bgVid, setBgVid] = useState(PopVid);

  useEffect(()=>{
    let i = (Math.random()*videos.length).toFixed(0);
    console.log(i);
    setBgVid(videos[i]);
  }, []) 
  /////////////////////////////////////////////

  // Set YDYW
  let [ydyw, setYDYW] = useState("YOUR DAY - YOUR WAY");

  useEffect(()=>{
    let message =  window.innerWidth > 880 ? "YOUR DAY - YOUR WAY" : ["YOUR DAY",<br />,"YOUR WAY"];
    console.log(window.innerWidth);
    setYDYW(message);
  }, []);



  return (
    <div className='header'>
        {/* <video 
          id='hd-bg-vid' 
          src={bgVid}
          loop 
          autoPlay
          muted
        >
            <source type='video/mp4' />
        </video> */}
        <img id='headPic' src={HeadPic} />
        {/* <div id='hd-name'>
          <h1 >Duncan Moffatt</h1> */}
          <h2 id='ydyw'>{ydyw}</h2>
        {/*</div> */}
    </div>
  )
}

export default Header