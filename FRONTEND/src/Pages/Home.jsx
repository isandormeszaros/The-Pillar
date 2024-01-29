import React from 'react';
import video from '../assets/Images/Home_vid.mp4';

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video
        title="Pillar Watch Video"
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover' }}
        autoPlay
      >
        <source src={video} type="video/mp4" />
      </video>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'beige', fontFamily: 'AbrilFatface-Regular' }}>
        <h1>Welcome to Pillar Watch</h1>
        <p>Discover the latest in Pillar watches.</p>
      </div>

      <section style={{ position: 'absolute', bottom: '20px', textAlign: 'center', width: '100%', color: 'white' }}>
        <h2>Összes óráink</h2>
        {/* Ide jöhetnek az összes óráink */}
      </section>
    </div>
  );
};

export default Home;
 