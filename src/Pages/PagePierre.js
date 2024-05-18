import React from 'react';
import { Link } from 'react-router-dom';
import pierre from '../images/pierre.png';

const PPierre = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Contenu des pierres */}
        <div className="col-md-4">
          <div className="card">
            <img src={pierre} className="card-img-top" alt="Pierre 1" />
            <div className="card-body">
              <h5 className="card-title">Pierre 1</h5>
              <p className="card-text">Description de la pierre 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pierre} className="card-img-top" alt="Pierre 2" />
            <div className="card-body">
              <h5 className="card-title">Pierre 2</h5>
              <p className="card-text">Description de la pierre 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pierre} className="card-img-top" alt="Pierre 3" />
            <div className="card-body">
              <h5 className="card-title">Pierre 3</h5>
              <p className="card-text">Description de la pierre 3.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Retour</Link>
      </div>
    </div>
  );
};

export default PPierre;
