import React from 'react';
import './App.css'; // assuming you've saved your CSS in a file named styles.css
import Title from './components/Title';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Trusters from './components/Trusters';

function App() {
  return (
    <div className='notebook'>
    <Navbar />
    <Title />
    <Container />
    <Trusters />
    </div>
  );
}

export default App;
