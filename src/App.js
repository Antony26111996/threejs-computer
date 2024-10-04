// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Box } from './components/Box'; // Import the Box component

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        {/* Camera controls for orbiting the object */}
        <OrbitControls />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Render the 3D model */}
        <Box />

        {/* Optional: environment for better lighting */}
        <Environment preset="sunset" background />
      </Canvas>
    </div>
  );
}

export default App;
