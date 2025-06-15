import React, { useEffect, useRef, useState } from "react"
import styles from "./productions.module.scss"
import DetailPlanet from "./detail/DetailPlanet";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function PlanetTag({ vn, eng, describe, image, glb, action, size, placement }) {

    return (
        <div className={styles.planetTag} onClick={() => action(vn, eng.toLowerCase())} data-aos={`fade-${placement}`}>
            <img src={image} />
            <div className={styles.right}>
                <span>{eng} <span>({vn})</span></span>
                <p>{describe}</p>
            </div>
        </div>
    )
}

function Productions() {

    const planets = useRef(
        [
            {
                "_id": "68185deb83379daabc10efe7",
                "vn_name": "Mặt Trời",
                "eng_name": "Sun",
                "image": "/images/planets/sun.png",
                "description": "The star at the center of the solar system that provides light and heat to the planets.",
                "glb": "/models/planets/earth.glb",
                "title": "🌞 \"The Sun – the blazing heart of our Solar System!\"",
                "detailDescription": "A colossal sphere of fire and fury, the Sun is the cosmic engine that powers life on Earth. It burns with unimaginable energy, fusing atoms at its core to shine with a brilliance that reaches across 93 million miles of space. Without it, planets would drift in frozen silence—but with it, we get sunrises, warm oceans, photosynthesis, and beach days. Born over 4.6 billion years ago, the Sun is both ancient and alive, pulling the entire solar system into an endless gravitational dance",
                "__v": 0,
                "modelSize": 4
            },
            {
                "_id": "68185deb83379daabc10efe9",
                "vn_name": "Sao Thủy",
                "eng_name": "Mercury",
                "image": "/images/planets/mercury.png",
                "description": "The closest planet to the Sun, with a cratered surface and no significant atmosphere.",
                "glb": "/models/planets/earth.glb",
                "title": "The Swift Planet",
                "detailDescription": "Mercury blazes around the Sun like a silver bullet, darting through space in a cosmic race. Its surface, battered and ancient, tells tales of celestial collisions. With scorching days and freezing nights, it’s a world of extremes—silent, shadowed, and sizzling—where time seems to slip through your fingers as fast as its orbit.",
                "__v": 0,
                "modelSize": 0.6
            },
            {
                "_id": "68185deb83379daabc10efeb",
                "vn_name": "Sao Kim",
                "eng_name": "Venus",
                "image": "/images/planets/venus.png",
                "description": "The hottest planet with a thick carbon dioxide atmosphere and intense greenhouse effect.",
                "glb": "/models/planets/earth.glb",
                "title": "Earth's Twin",
                "detailDescription": "Cloaked in golden clouds and seething with volcanic passion, Venus is both a mirror and a warning. Its toxic skies trap heat in an endless inferno, where surface temperatures rival a blast furnace. Though its beauty is dazzling from afar, up close it’s a tempestuous queen, smothered in storms and shrouded in mystery.",
                "__v": 0,
                "modelSize": 8
            },
            {
                "_id": "68185deb83379daabc10efed",
                "vn_name": "Trái Đất",
                "eng_name": "Earth",
                "image": "/images/planets/earth.png",
                "description": "The only known planet to support life, with abundant water and a breathable atmosphere.",
                "glb": "/models/planets/earth.glb",
                "title": "Our Home Planet",
                "detailDescription": "A living gem spinning in the vastness of space, Earth is the only known cradle of life. Its blue oceans dance with waves, clouds swirl over green continents, and the rhythm of seasons shapes every creature’s story. With just the right distance from the Sun and a protective magnetic shield, it’s a cosmic oasis where forests breathe, rivers sing, and humanity dreams beneath starlit skies.\nand breathable atmosphere. It's the only planet known to have continents, oceans, and a stable climate suitable for biodiversity.",
                "__v": 0,
                "modelSize": 1
            },
            {
                "_id": "68185deb83379daabc10efef",
                "vn_name": "Sao Hỏa",
                "eng_name": "Mars",
                "image": "/images/planets/mar.png",
                "description": "Known as the Red Planet, it may have water in the form of ice and is a focus of space exploration.",
                "glb": "/models/planets/earth.glb",
                "title": "The Red Planet",
                "detailDescription": "Winds whisper across rust-colored plains, carving valleys and dunes into the soul of Mars. Once wet, now dry, this enigmatic neighbor holds secrets of ancient rivers and potential life. A cold, lonely world—yet humanity’s most promising destination for a second home. The Red Planet beckons with challenge, wonder, and the spirit of exploration.",
                "__v": 0,
                "modelSize": 4
            },
            {
                "_id": "68185deb83379daabc10eff1",
                "vn_name": "Sao Mộc",
                "eng_name": "Jupiter",
                "image": "/images/planets/jupiter.png",
                "description": "The largest planet in the solar system, famous for its Great Red Spot and many moons.",
                "glb": "/models/planets/earth.glb",
                "title": "The Giant",
                "detailDescription": "A majestic colossus of swirling storms and striped clouds, Jupiter commands the solar stage. Its Great Red Spot rages with ancient fury, and its gravitational pull tugs on everything nearby. With dozens of moons in its court and a heart of gas and pressure, it’s less a planet, more a miniature solar system in motion.",
                "__v": 0,
                "modelSize": 8
            },
            {
                "_id": "68185deb83379daabc10eff3",
                "vn_name": "Sao Thổ",
                "eng_name": "Saturn",
                "image": "/images/planets/saturn.png",
                "description": "Recognized for its stunning ring system, composed of ice and rock particles.",
                "glb": "/models/planets/earth.glb",
                "title": "The Ringed Beauty",
                "detailDescription": "Saturn is the ballerina of the cosmos, spinning gracefully with rings that shimmer like cosmic jewelry. Beyond its elegance lies a gas giant with powerful winds, deep secrets, and moons that might harbor life. It's a planet of poetry and paradox—both delicate and immense, serene and stormy.",
                "__v": 0,
                "modelSize": 0.03
            },
            {
                "_id": "68185deb83379daabc10eff5",
                "vn_name": "Sao Thiên Vương",
                "eng_name": "Uranus",
                "image": "/images/planets/uranus.png",
                "description": "An ice giant with a bluish color due to methane, and it rotates on its side.",
                "glb": "/models/planets/earth.glb",
                "title": "The Sideways Planet",
                "detailDescription": "Uranus rolls through the void like a celestial marble on its side, spinning to a rhythm all its own. Wrapped in icy blues and greens, it hides storms beneath a calm facade. This sideways world is a rebel of the solar system—a chilled, quiet oddball with rings, moons, and a frosty charm unlike any other.",
                "__v": 0,
                "modelSize": 0.01
            },
            {
                "_id": "68185deb83379daabc10eff7",
                "vn_name": "Sao Hải Vương",
                "eng_name": "Neptune",
                "image": "/images/planets/neptune.png",
                "description": "A deep blue planet known for its strong winds and farthest orbit from the Sun.",
                "glb": "/models/planets/earth.glb",
                "title": "The Windy Giant",
                "detailDescription": "Neptune whispers in deep sapphire tones at the edge of our solar realm. Fierce winds scream across its skies, spinning storms into spirals of power. Though far and cold, it's alive with motion, mystery, and magic—calling out across the darkness with the voice of the deep, beckoning us ever further into the unknown.",
                "__v": 0,
                "modelSize": 1
            }
        ]
    );
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [planet, setPlanet] = useState(null);
    const [planetPath, setPlanetPath] = useState("/");

    useEffect(() => {
        AOS.init({
            duration: 1500,  // thời gian animation (ms)
            once: true,      // chỉ chạy 1 lần
        });
    }, []);

    const onSelectPlanet = (planetName, path = "/") => {
        setPlanet(planetName)
        setPlanetPath(path)
        setShow(true)
    }
    return (
        <div className={styles.container}>
            <div className={styles.canvasContainer}>

            </div>

            <div className={styles.content}>
                {planets.current.map((planet, index) => (
                    <DetailPlanet
                        image={planet.image}
                        title={planet.eng_name}
                        detailDescribe={planet.detailDescription}
                        key={index}
                    />
                ))}
            </div>
        </div>

    );
}

export default Productions