import React from 'react';
import Header from '../components/Header';
import Pierres from '../components/Pierres';
import Contact from '../components/Contact';

const HomeLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Pierres />
      </main>
      <Contact />
      <footer className="footer">
        <p>&copy; 2024 GlobalMineral Co. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomeLayout;
