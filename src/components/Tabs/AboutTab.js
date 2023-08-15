import React from 'react';
import Duncan from '../Media/duncan.jpg';

function AboutTab() {
  return (
    <div className='tab-page'>
      <div id='abt-quote' className='card'>
          <div className='quote'>
            <h2>"The more you praise and celebrate your life, the more there is in life to celebrate"</h2>
            <p>Oprah Winfrey</p>
          </div>
      </div>
      <div id='abt-title-card' className='card'>
        <img id='duncan' src={Duncan}></img>
        <div id='fun-title-text'>
          <h1>Greetings</h1>
          <p>I am Duncan Moffatt a registered Celebrant located in the East Midlands and able to travel throughout that region.</p>
          <p>I also have a home in Torrevieja, near Alicante, Spain, and would be able to undertake Ceremonies in that Area and would be happy to do so.</p>
        </div>
      </div>
      <div id='abt-train' className='card'>
        <h3>Why did I decide to Train as a Celebrant? </h3>
        <p>I have had extensive experience of Public Speaking during my time as a Rotarian and as a Mason, I am used to delivering speeches and standing with confidence in front of an audience ranging from 4 or 5 people to that of hundreds, I have also been honoured to speak the Eulogy at a number of Funerals, and to M.C. at weddings and special occasions.</p>
        <p>I have many hobbies and welcome enquiries from Motorcyclists and those who love Sailing as well as Masonic and Rotarian members.</p>
      </div>
      <div id='abt-more' className='card'>
        <p>Having run my own businesses since 1981, I have now retired from my main employment, and wish to fill my time with a role I am both good at, and can assist in adding gravitas and form to special occasions, I can make Happy occasions memorable, and sad occasions unforgettable.</p>
        <p>I am passionate in what I undertake to do, committed to invoking special memories that will remain with you now and always, these ceremonies will be what you always imagined and wished for, they will be yours. Your Day in Your Way.</p>
      </div>
      <div id='abt-contact' className='card'>
        <p>
          <span style={{"color": "var(--tertiary-color"}}>Call me – </span>0780 888 7423
          <br />
          <span style={{"color": "var(--tertiary-color"}}>Email me – </span><a href='mailto:duncan.moffatt@hotmail.co.uk' className='link'>duncan.moffatt@hotmail.co.uk</a>
        </p>
      </div>
    </div>
  )
}

export default AboutTab