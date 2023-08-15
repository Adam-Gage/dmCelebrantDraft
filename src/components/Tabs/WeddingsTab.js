import React from 'react';
import Wedding from '../Media/wedding.jpg';

function WeddingsTab() {
  
  return (
    <div id='wedding-tab' className='tab-page'>
      <div id='wed-title' className='card'>
        <h1>WEDDING CELEBRANT</h1>
        <h2>Why Have A Celebrant?</h2>
        <p>A Registrar has a limited choice in where they can marry you, and the words they can use for your ceremony.  For instance, you may have grown up with religious beliefs, and would like a short prayer, or religious reading incorporated within your ceremony, with a Registrar, that’s not possible. Also, you may not be able to have poems or songs which have any religious connotation whatsoever. (Such as “Angels” or even “Bat out of Hell!!”).</p>
        <p>With me as your Celebrant, your ceremony will incorporate whatever you want it to.  If you and your partner are from different cultures, or have different  beliefs, then elements of both your cultures can be included in the ceremony itself.   I can also conduct your ceremony anywhere.  (See my website pictures)</p>
        <p>If your dream is to have a woodland wedding, a sunset beach ceremony, a private moment for you and a few friends on the Lakeland Fells, or to set up a beautiful gazebo or marquee in your favourite gardens with loads of guests, I will work with you to make it happen.  After all, it’s your day!</p>
        <img id='wedPic' src={Wedding}></img>
      </div>


      <div id='wedding-legal' className='card'>
        <h2>The Legal Bit</h2>
        <p>A celebrant does not currently have the power to Marry you in Law, and the Legal aspect of Marriage needs to be carried out by a Registrar.</p>
        <p>This legal part of your Marriage can be carried out simply and quickly either before or after your Celebration, and would depend on your wishes and the arrangements you will wish to make regarding a honeymoon and maybe family or other home and work considerations.</p>
        <p>Most couples consider their exchange of vows to be the moment of their Marriage and are content to complete the legal paperwork at their own convenience with just the necessary witnesses.</p>
        <p>I can advise on all the legal requirements and of the different methods and price structures of the local Registrars.</p>
      </div>
    </div>
  )
}

export default WeddingsTab