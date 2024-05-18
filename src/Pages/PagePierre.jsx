import React from 'react';
import { Link } from 'react-router-dom';
import pierre from '../images/pierre.png';
import min1 from '../images/min1.PNG';
import min2 from '../images/min2.PNG';
import min3 from '../images/min3.PNG';
import Nav from '../layouts/nav';

function PPierre() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mt-5">
        <img src={min1} className="img-fluid" alt="Pierre 1" />
        <img src={min2} className="img-fluid" alt="Pierre 2" />
        <img src={min3} className="img-fluid" alt="Pierre 3" />
      </div>
    </>
  );
}

export default PPierre;
