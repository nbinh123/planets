import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import OrbitRing from "./OrbitRing";
import * as THREE from 'three';
import { useSpring } from '@react-spring/three';

const CameraFocus = ({ target }) => {
    const { camera } = useThree();
    const [spring, api] = useSpring(() => ({
        position: camera.position.toArray(),
        config: { mass: 1, tension: 100, friction: 40 },
        onChange: ({ value }) => {
            camera.position.set(...value.position);
            camera.lookAt(target.x, target.y, target.z);
        }
    }));

    useEffect(() => {
        if (target) {
            const offsetDir = new THREE.Vector3().subVectors(camera.position, target).normalize();
            const newPos = target.clone().add(offsetDir.multiplyScalar(10)); // cách hành tinh 10 đơn vị
            api.start({ position: newPos.toArray() });
        }
    }, [target]);

    return null;
};

const Planet = ({ modelUrl, size, distance, speed, name, onSelect, isShow }) => {
    const ref = useRef();
    const { scene } = useGLTF(modelUrl);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        if (speed > 0 && !ref.current.userData.isPaused) {
            ref.current.position.x = Math.cos(t) * distance;
            ref.current.position.z = Math.sin(t) * distance;
        }
        ref.current.rotation.y += 0.01;
    });

    return (
        <group>
            {(distance > 0 && isShow) && <OrbitRing radius={distance}/>}
            <primitive
                ref={ref}
                object={scene}
                scale={0.1 * size}
                onClick={() => onSelect(name, ref)}
                userData={{ isPaused: false }}
            />
        </group>
    );
};

const SolarSystem = () => {
    const planets = useRef([
        { vietnamese: "Mặt Trời", english: "Sun", speed: 0, distance: 0, glb: "/models/planets/sun.glb", size: 4 },
        { vietnamese: "Sao Thủy", english: "Mercury", speed: 1.6, distance: 7, glb: "/models/planets/mercury.glb", size: 0.6 * 0.38 },
        { vietnamese: "Sao Kim", english: "Venus", speed: 1.2, distance: 10, glb: "/models/planets/venus.glb", size: 8 * 0.95 },
        { vietnamese: "Trái Đất", english: "Earth", speed: 1, distance: 13, glb: "/models/planets/earth.glb", size: 1 },
        { vietnamese: "Sao Hỏa", english: "Mars", speed: 0.8, distance: 16, glb: "/models/planets/mars.glb", size: 4 * 0.53 },
        { vietnamese: "Sao Mộc", english: "Jupiter", speed: 0.4, distance: 20, glb: "/models/planets/jupiter.glb", size: 8 * 2 },
        { vietnamese: "Sao Thổ", english: "Saturn", speed: 0.3, distance: 25, glb: "/models/planets/saturn.glb", size: 0.03 * 2 },
        { vietnamese: "Sao Thiên Vương", english: "Uranus", speed: 0.2, distance: 30, glb: "/models/planets/uranus.glb", size: 0.01 * 2 },
        { vietnamese: "Sao Hải Vương", english: "Neptune", speed: 0.15, distance: 35, glb: "/models/planets/neptune.glb", size: 1 * 2 },
    ]);

    const [isShow, setIsShow] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    // Pause/unpause toàn bộ
    useEffect(() => {
        document.querySelectorAll('[data-name=planet]').forEach(obj => {
            obj.userData = { isPaused };
        });
    }, [isPaused]);

    return (
        <>
            <Canvas camera={{ position: [0, 20, 50], fov: 60 }} style={{ height: "100vh" }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} intensity={2} />
                <OrbitControls />

                {selectedPlanet?.ref && <CameraFocus target={selectedPlanet.ref.current.position} />}

                {planets.current.map((e, index) => (
                    <Planet
                        key={e.english}
                        modelUrl={e.glb}
                        size={e.size}
                        speed={e.speed}
                        distance={e.distance}
                        name={e.english}
                        onSelect={(name, ref) => setSelectedPlanet({ name, ref })}

                        isShow={isShow}
                    />
                ))}
            </Canvas>

            <div style={{ }}>
                <button className="btn btn-light" onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? "Paused" : "Running"}
                </button>
                <button className="btn btn-light" onClick={() => setIsShow(!isShow)}>
                    {isShow ? "OrbitRing" : "No OrbitRing"}
                </button>
            </div>

            {selectedPlanet && (
                <div style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    background: 'white',
                    padding: 10,
                    borderRadius: 8,
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                    zIndex: 10
                }}>
                    <h4>{selectedPlanet.name}</h4>
                    <p>Thông tin chi tiết hành tinh này...</p>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => setSelectedPlanet(null)}>Đóng</button>
                </div>
            )}
        </>
    );
};

export default SolarSystem;
