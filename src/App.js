import React from 'react';
import Header from './components/Header';
import Pierres from './components/Pierres';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
        <Pierres />
        <Contact />
        </main>
        <footer className="footer">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </footer>
      </div>
  );
}

export default App;
