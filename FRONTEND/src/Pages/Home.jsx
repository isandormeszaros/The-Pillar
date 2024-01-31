import React from 'react';
import video from '../assets/Images/Home_vid.mp4';

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <section style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video
          title="Pillar Watch Video"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(45%)' }}
          autoPlay
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>

      <section style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'beige', zIndex: 1 }}>
        <div>
          <h1 style={{ fontFamily: 'AbrilFatface-Regular', fontSize: '3rem', width: '300px'}}>Welcome to Pillar Watch</h1>
          <p style={{ fontFamily: 'Poppins' }}>Discover the latest in Pillar watches.</p>
        </div>
      </section>
    </div>

  );
};

export default Home;
