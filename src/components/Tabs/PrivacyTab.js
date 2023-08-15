import React from 'react'
import PointBox from '../Items/PointBox';

import './tabs.css';

// Who I am
const points = [
  {
    key: 0,
    title:"Who I am",                      
    content:"Duncan Moffatt"
  },
  {
    key: 1,
    title:"Information We Collect",        
    content:"I collect personal data including phone numbers, email addresses, dates of birth and other personal information which could be used to identify you. The Website may collect and store Cookies which you can disable in your browser."
  },
  {
    key: 2,
    title:"How I Use Your Personal Data",  
    content:"Your data is only collected to allow me to operate as a Celebrant on your behalf. I will never disclose, share, or sell your data without your consent, (unless required to do so by law)."
  },
  {
    key: 3,
    title:"The purposes and reasons for processing your personal data are detailed below:", 
    content:"I collect your personal data in the performance of a contract, to provide a service to you and to ensure that I am able to fulfil my service to you to the highest standards possible.<br />I also collect and store your personal data as part of our legal obligation for business accounting and tax purposes."
  },
  {
    key: 4,
    title:"Data Subject’s Rights",         
    content:"You have the right to see what data I hold on you. To see this please email :"
  },
  {
    key: 5,
    title:"Sharing and Disclosing Your Personal Information", 
    content:"Your information may be shared with other third party businesses that are directly related to the fulfilment of my  contract with you. Examples include but are not limited to Funeral Directors/Arrangers, Crematoriums, Printers, Music/Media Suppliers, Wedding planners, Photographers."
  },
  {
    key: 6,
    title:"Safeguarding Measures",         
    content:"Once my contract with you is completed and my tax liability for that year settled, your data will be deleted. Electronically this means files are deleted and every Month my hard disc is cleaned. Hard copies containing identifiable information are shredded."
  },
  {
    key: 7,
    title:"How Long We Keep Your Data",    
    content:"Your Data is kept until my Tax Liability for that year is settled."
  },
  {
    key: 8,
    title:"", 
    content:"Source Data may be collected from a number of sources which include but are not limited to The Client, Funeral Directors/Arrangers, Crematoriums, Printers, Music/Media Suppliers, Photographers, Wedding Planners."
  },
  {
    key: 9,
    title:"Consent", 
    content:"Consent is initially implied by your interaction with the Funeral director/Arranger. Implicit consent is given on the signing of a GDPR document at our first meeting."
  }
];




function PrivacyTab() {
  return (
    <div className='tab-page'>
      <h2>GDPR Compliant Privacy Notice</h2>

      {points.map(i=> <PointBox point={i.title} exp={i.content} /> )}
      

      

    </div>
  )
}

export default PrivacyTab