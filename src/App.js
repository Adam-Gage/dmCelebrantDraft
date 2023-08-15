import React from 'react';
import { useState } from 'react';


import { AddBox, BrokenImage, DataThresholding } from '@mui/icons-material';
import App2 from './App2';
import App3 from './App3';

import './App.css';

function App() {
  const [profile, setProfile] = useState("Style 2");
  const [app, setApp] = useState(<App2 />)

  function setStyle() {
    if (profile == "Style 1") {
      setProfile("Style 2");
      setApp(<App2 />)
    } else {
      setProfile("Style 1");
      setApp(<App3 />)
    }
  }

  return (
    <div>
      <button id='profile-button' onClick={setStyle} >Showing {profile}</button>
      {app}
    </div>
  );
}

export default App;
