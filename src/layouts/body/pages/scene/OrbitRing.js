// OrbitRing.jsx
import React from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

const OrbitRing = ({ radius, isTrigger = false }) => {
    const points = [];

    // Tạo 1 đường tròn gồm nhiều điểm
    for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }

    return (
        <Line
            points={points}
            color={isTrigger ? "lightgreen" : "gray"}
            lineWidth={1}
        />
    );
};

export default OrbitRing;
