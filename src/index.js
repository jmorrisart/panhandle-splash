import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import PanhandleLogo from './assets/images/logoBW.png';
import BlowdryImg from './assets/images/blowdry.JPG';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container-all">

    <img src={ PanhandleLogo } />
    <h1>Our website is getting a makeover!</h1>
    <hr />

    <div className="text-container">
      <p>Don't worry, you can still contact us to schedule an appointment. 
        Please give us a call at <span style={{fontWeight: 700}}>(509) 447-2176</span> so we can get you taken care of!
        In the meantime, don't forget to follow us on <a href="https://www.instagram.com/panhandlestudio/?utm_source=ig_embed&amp;utm_campaign=loading">Instagram!</a>
      </p>
    </div>

    <div className="image-container">
      <img className="blowdry" src={ BlowdryImg } />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();