import React from 'react'
import './tabs.css';
import Tree from '../Media/funtree.png';

function FuneralTab() {
  return (
    <div className='tab-page'>
      <div id='fun-title-card' className='card'>
        <img id='funtree' src={Tree}></img>
        <div id='fun-title-text'>
          <h1>Funeral Celebrant</h1>
          <div className='quote'>
            <h2>"It's not goodbye forever. Only goodbye for now"</h2>
            <p>Anon</p>
          </div>
        </div>
      </div>


      <div className='card'>
        <h2>What is a Funeral Celebrant?</h2>
        <p>A Funeral celebrant is a qualified person that officiates at funeral services by planning and overseeing funeral proceedings with the Family.</p>
        <p>Funeral celebrants conduct non-religious, and spiritual funeral services.</p>
        <p>As a Celebrant I will aim for the funeral service to be a ‘celebration of life’ that honours the person’s memory.</p>
        <p>This approach places greater emphasis on how they lived their life, their personality, and the memories of mourners.</p>
        <p>As your Celebrant, I will facilitate the creation, by you, of a ceremony of substance and meaning.</p>
      </div>

      <h3 className='card'>The most important part of being a Celebrant is that I tailor the service around you and what you want.</h3>

      <div className='card'>
        <h2>When do you need a Funeral Celebrant?</h2>
        <ul>
          <li>When you need someone to take charge of the main speaking role in a funeral service.</li>
          <li>When you want someone who can be flexible when planning the service.</li>
          <li>When you would like help, guidance and advice arranging the ceremony.</li>
        </ul>
        <ul>What I do:
          <li>Discuss the type of service you wish to have.</li>
          <li>Find out about your loved one and their life.</li>
          <li>Prepare a draft plan and script for the service.</li>
          <li>Confirm with you the details and changes.</li>
          <li>Lead the Service on the day.</li>
          <li>Provide you with a copy of the Eulogy afterwards.</li>
        </ul>
      </div>
    </div>
  )
}

export default FuneralTab