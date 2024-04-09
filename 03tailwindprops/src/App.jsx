import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <>
      <Card img="https://images.pexels.com/photos/18471860/pexels-photo-18471860/free-photo-of-young-men-in-sportswear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card
        username="akshaya"
        img="https://images.pexels.com/photos/4117760/pexels-photo-4117760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        username="akshaya"
        img="https://images.pexels.com/photos/4117760/pexels-photo-4117760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </>
  );
}

export default App;
