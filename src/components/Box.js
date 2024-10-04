import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene } from 'three'; // Import Scene from three

export function Box() {
    const scene = new Scene(); // Use Scene directly instead of THREE.Scene()
    
    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/models/model.glb', (gltf) => {
            scene.add(gltf.scene);
        });
    }, [scene]);

    return <primitive object={scene} scale={0.5} />;
}
