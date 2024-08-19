import React from 'react';
import AnimatedImages from './components/AnimatedImages';
import Navbar from './components/Navbar'; 
import './App.css';
import AppointmentBar from './components/AppointmentBar/AppointmentBar';
import GradientLine from './components/GradientLine';
import TagLine from './components/TagLine';
import HowItWorks from './components/HowItWorks';
import Card from './components/Cards'


function App() {
  return (
    <div>
      <Navbar />
      <AnimatedImages />
      <TagLine />
        <AppointmentBar />
        <GradientLine />
        <HowItWorks />
        <Card />

    </div>
    
  );
}

export default App;