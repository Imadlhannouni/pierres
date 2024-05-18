import React, { useState } from 'react';
import './Pierres.css';
import pierre from '../images/pierre.png';

const Pierres = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="pierres" className="container mt-5">
      <h2 className="text-center mb-4">Nos Pierres</h2>
      <div className="row">
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
        {showMore && (
          <>
            <div className="col-md-4">
              <div className="card">
                <img src={pierre} className="card-img-top" alt="Pierre 4" />
                <div className="card-body">
                  <h5 className="card-title">Pierre 4</h5>
                  <p className="card-text">Description de la pierre 4.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={pierre} className="card-img-top" alt="Pierre 5" />
                <div className="card-body">
                  <h5 className="card-title">Pierre 5</h5>
                  <p className="card-text">Description de la pierre 5.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={pierre} className="card-img-top" alt="Pierre 6" />
                <div className="card-body">
                  <h5 className="card-title">Pierre 6</h5>
                  <p className="card-text">Description de la pierre 6.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!showMore && (
        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary" onClick={toggleShowMore}>
            Voir plus
          </button>
        </div>
      )}
      {showMore && (
        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary" onClick={toggleShowMore}>
            Voir moins
          </button>
        </div>
      )}
    </section>
  );
};

export default Pierres;
