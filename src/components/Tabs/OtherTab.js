import React from 'react';
import PointBox from '../Items/PointBox';
import Buddy from '../Media/buddy.jpg';

const services = [
  {
    service:"Interment Services",
    desc:"After you have collected the ashes, many people are at a loss as to what to do next. I can help be working with you to decide what you feel would be a fitting final resting place and help with a short service whilst we give your loved one their final resting place."
  },
  {
    service:"Remembrance Ceremonies",
    desc:"There is a definite comfort in coming together with others to remember someone. I can help plan a personalised, creative event at a location that holds special meaning to you. The ceremony can, if you wish, reflect spiritual beliefs and can be tailored to suit the sensibilities of both the person who has passed and family and friends. Working together the possibilities for a meaningful remembrance event are endless."
  },  
  {
    service:"Baby Naming Ceremony",
    desc:""
  },  
  {
    service:"Renewal of Vows",
    desc:""
  },  
  {
    service:"Divorce Ceremonies",
    desc:""
  },  
  {
    service:"Business Launch Ceremony",
    desc:""
  },  
  {
    service:"Business amalgamation Cermony",
    desc:""
  }
]


function OtherTab() {
  return (
    <div className='tab-page'>
      <div id='other-title-card' className='card'>
        <div id='other-title-text'>
          <h1>Other Services</h1>
          <div className='quote'>
            <h2>"The miracle of life is this: the more we share the more we have"</h2>
            <p>Leonard Nemoy</p>
          </div>
        </div>
      </div>
      <div id='other-services-card' className='card'>
        <h2>
          There are many other services that I, as a Celebrant, can offer.
          <br />
          These include:
        </h2>
        {services.map(i=> <PointBox point={i.service} exp={i.desc} /> )}
      </div>
      <img id='buddy' src={Buddy}></img>
    </div>
  )
}

export default OtherTab