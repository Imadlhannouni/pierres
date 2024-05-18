import React from 'react';
import { Link } from 'react-router-dom';
import pierre from '../images/pierre.png';
import sell1 from '../images/sell1.png';
import sell2 from '../images/sell2.png';
import sell3 from '../images/sell3.png';
import sell4 from '../images/sell4.png';
import sell5 from '../images/sell5.png';
import Nav from '../layouts/nav';

function Selenite() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mt-5">
        <img src={sell1} className="img-fluid" alt="Pierre 1" width="1050"/>
        <img src={sell3} className="img-fluid" alt="Pierre 3" width="1050"/>
        <img src={sell4} className="img-fluid" alt="Pierre 3" width="1050"/>
        <img src={sell5} className="img-fluid" alt="Pierre 3" width="1050"/>
        <img src={sell2} className="img-fluid" alt="Pierre 2" width="1050"/>
      </div>
    </>
  );
}

export default Selenite;
