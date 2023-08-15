import React, { useEffect, useState } from 'react';
import './pointbox.css';

function PointBox({point, exp}) {

  return (
    <div className='privacy-box card'>
        <div id='privacy-point' >{point}</div>
        <div id='privacy-ans' >{exp}</div>
    </div>
  )
}

export default PointBox