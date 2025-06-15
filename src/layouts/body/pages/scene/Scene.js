import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import OrbitRing from "./OrbitRing";
import * as THREE from 'three';

import Typewriter from '../../../tool/TypeWriter';

import styles from "./scene.module.scss"

const CameraFocus = ({ targetRef, followDistance = 10 }) => {
    const { camera } = useThree();
    const offset = useRef(new THREE.Vector3(0, followDistance / 2, followDistance));

    useFrame(() => {
        if (!targetRef?.current) return;

        const targetPos = targetRef.current.position.clone();

        // Tính vị trí camera mới dựa trên offset
        const desiredPos = targetPos.clone().add(offset.current);

        // Di chuyển mượt camera tới vị trí mới
        camera.position.lerp(desiredPos, 0.1); // 0.1 là độ mượt
        camera.lookAt(targetPos);
    });

    return null;
};

const Planet = ({ modelUrl, size, distance, speed, name, onSelect, isShow, isPaused, description, detectRef = () => {} }) => {
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

    useEffect(() => {
        if (ref.current) {
            ref.current.userData.isPaused = isPaused;
        }
    }, [isPaused]);
    useEffect(() => {
        detectRef(name, ref.current)
    },[])

    return (
        <group>
            {(distance > 0 && isShow) && <OrbitRing radius={distance} />}
            <primitive
                ref={ref}
                object={scene}
                scale={0.1 * size}
                onDoubleClick={() => onSelect(name, ref, description)}
                userData={{ isPaused: false }}
            />
        </group>
    );
};

const SolarSystem = () => {
    const planets = useRef([
        { description: "A colossal sphere of fire and fury, the Sun is the cosmic engine that powers life on Earth. It burns with unimaginable energy, fusing atoms at its core to shine with a brilliance that reaches across 93 million miles of space. Without it, planets would drift in frozen silence.",vietnamese: "Mặt Trời", english: "Sun", speed: 0, distance: 0, glb: "/models/planets/sun.glb", size: 4 },
        { description: "Mercury blazes around the Sun like a silver bullet, darting through space in a cosmic race. Its surface, battered and ancient, tells tales of celestial collisions. With scorching days and freezing nights, it’s a world of extremes—silent, shadowed, and sizzling.",vietnamese: "Sao Thủy", english: "Mercury", speed: 1.6, distance: 7, glb: "/models/planets/mercury.glb", size: 0.6 * 0.38 },
        { description: "Cloaked in golden clouds and seething with volcanic passion, Venus is both a mirror and a warning. Its toxic skies trap heat in an endless inferno, where surface temperatures rival a blast furnace. Though its beauty is dazzling from afar, up close it’s a tempestuous queen.",vietnamese: "Sao Kim", english: "Venus", speed: 1.2, distance: 10, glb: "/models/planets/venus.glb", size: 8 * 0.95 },
        { description: "A living gem spinning in the vastness of space, Earth is the only known cradle of life. Its blue oceans dance with waves, clouds swirl over green continents, and the rhythm of seasons shapes every creature’s story. With just the right distance from the Sun.",vietnamese: "Trái Đất", english: "Earth", speed: 1, distance: 13, glb: "/models/planets/earth.glb", size: 1 },
        { description: "Winds whisper across rust-colored plains, carving valleys and dunes into the soul of Mars. Once wet, now dry, this enigmatic neighbor holds secrets of ancient rivers and potential life. A cold, lonely world—yet humanity’s most promising destination for a second home.",vietnamese: "Sao Hỏa", english: "Mars", speed: 0.8, distance: 16, glb: "/models/planets/mars.glb", size: 4 * 0.53 },
        { description: "A majestic colossus of swirling storms and striped clouds, Jupiter commands the solar stage. Its Great Red Spot rages with ancient fury, and its gravitational pull tugs on everything nearby. With dozens of moons in its court and a heart of gas and pressure, it’s less a planet.",vietnamese: "Sao Mộc", english: "Jupiter", speed: 0.4, distance: 20, glb: "/models/planets/jupiter.glb", size: 8 * 2 },
        { description: "Saturn is the ballerina of the cosmos, spinning gracefully with rings that shimmer like cosmic jewelry. Beyond its elegance lies a gas giant with powerful winds, deep secrets, and moons that might harbor life. It's a planet of poetry and paradox—both delicate and immense and stormy.",vietnamese: "Sao Thổ", english: "Saturn", speed: 0.3, distance: 25, glb: "/models/planets/saturn.glb", size: 0.03 * 2 },
        { description: "Uranus rolls through the void like a celestial marble on its side, spinning to a rhythm all its own. Wrapped in icy blues and greens, it hides storms beneath a calm facade. This sideways world is a rebel of the solar system—a chilled, quiet oddball with rings, moons.",vietnamese: "Sao Thiên Vương", english: "Uranus", speed: 0.2, distance: 30, glb: "/models/planets/uranus.glb", size: 0.01 * 2 },
        { description: "Neptune whispers in deep sapphire tones at the edge of our solar realm. Fierce winds scream across its skies, spinning storms into spirals of power. Though far and cold, it's alive with motion, mystery, and magic—calling out across the darkness with the voice of the deep",vietnamese: "Sao Hải Vương", english: "Neptune", speed: 0.15, distance: 35, glb: "/models/planets/neptune.glb", size: 1 * 2 },
    ]);

    const planetRefs = useRef({});

    const [isShow, setIsShow] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const detectRef = (thisName, thisRef) => {
        planetRefs.current[thisName] = thisRef;
    }

    useEffect(() => {
        console.log(planetRefs.current);
        
    },[planetRefs])
    useEffect(() => {
        planets.current.forEach(p => {
            useGLTF.preload(p.glb);
        });
    }, []);

    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [0, 20, 50], fov: 60 }} style={{ height: "100vh" }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} intensity={2} />
                <OrbitControls />

                {selectedPlanet?.ref && <CameraFocus targetRef={selectedPlanet.ref} />}

                {planets.current.map((e, index) => (
                    <Planet
                        key={e.english}
                        modelUrl={e.glb}
                        size={e.size}
                        speed={e.speed}
                        distance={e.distance}
                        name={e.english}
                        description={e.description}
                        onSelect={(name, ref, description) => setSelectedPlanet({ name, ref, description })}
                        isPaused={isPaused}
                        isShow={isShow}
                        detectRef={detectRef}
                    />
                ))}
            </Canvas>

            <div className={styles.tools}>
                <button className="btn btn-light" onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? "Resume" : "Pause"}
                </button>
                <button className="btn btn-light" onClick={() => {setIsShow(!isShow); setIsPaused(false)}}>
                    {isShow ? "OrbitRing" : "No OrbitRing"}
                </button>
            </div>

            {selectedPlanet && (
                <div className={styles.infoTag}>
                    <h4>{selectedPlanet?.name}</h4>
                    <Typewriter text={selectedPlanet?.description} speed={20}/>
                    <button className="btn btn-outline-secondary" onClick={() => setSelectedPlanet(null)}>Đóng</button>
                </div>
            )}
        </div>
    );
};

export default SolarSystem;
