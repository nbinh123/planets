import React, { useEffect, useRef, useState } from "react"
import styles from "./productions.module.scss"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function PlanetTag({ vn, eng, describe, image, glb, action, size, placement }) {

    return (
        <div className={styles.planetTag} onClick={() => action(vn, eng.toLowerCase())} data-aos={`fade-${placement}`}>
            <img src={image}/>
            <div className={styles.right}>
                <span>{eng} <span>({vn})</span></span>
                <p>{describe}</p>
            </div>
        </div>
    )
}

function Productions() {

    const planets = useRef([
        {
            vietnamese: "Mặt Trời",
            english: "Sun",
            image: "/images/planets/sun.png",
            glb: "/models/planets/sun.glb",
            describe: "The star at the center of the solar system that provides light and heat to the planets.",
            size: 1,
        },
        {
            vietnamese: "Sao Thủy",
            english: "Mercury",
            image: "/images/planets/mercury.png",
            glb: "/models/planets/mercury2.glb",
            describe: "The closest planet to the Sun, with a cratered surface and no significant atmosphere.",
            size: 4,
        },
        {
            vietnamese: "Sao Kim",
            english: "Venus",
            image: "/images/planets/venus.png",
            glb: "/models/planets/venus.glb",
            describe: "The hottest planet with a thick carbon dioxide atmosphere and intense greenhouse effect.",
            size: 8,
        },
        {
            vietnamese: "Trái Đất",
            english: "Earth",
            image: "/images/planets/earth.png",
            glb: "/models/planets/earth.glb",
            describe: "The only known planet to support life, with abundant water and a breathable atmosphere.",
            size: 1,
        },
        {
            vietnamese: "Sao Hỏa",
            english: "Mars",
            image: "/images/planets/mar.png",
            glb: "/models/planets/mars.glb",
            describe: "Known as the Red Planet, it may have water in the form of ice and is a focus of space exploration.",
            size: 0.7,
        },
        {
            vietnamese: "Sao Mộc",
            english: "Jupiter",
            image: "/images/planets/jupiter.png",
            glb: "/models/planets/jupiter.glb",
            describe: "The largest planet in the solar system, famous for its Great Red Spot and many moons.",
            size: 8,
        },
        {
            vietnamese: "Sao Thổ",
            english: "Saturn",
            image: "/images/planets/saturn.png",
            glb: "/models/planets/saturn.glb",
            describe: "Recognized for its stunning ring system, composed of ice and rock particles.",
            size: 0.03,
        },
        {
            vietnamese: "Sao Thiên Vương",
            english: "Uranus",
            image: "/images/planets/uranus.png",
            glb: "/models/planets/uranus.glb",
            describe: "An ice giant with a bluish color due to methane, and it rotates on its side.",
            size: 0.01,
        },
        {
            vietnamese: "Sao Hải Vương",
            english: "Neptune",
            image: "/images/planets/neptune.png",
            glb: "/models/planets/earth.glb",
            describe: "A deep blue planet known for its strong winds and farthest orbit from the Sun.",
            size: 1,
        }
    ]);
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
                    <PlanetTag
                        size={planet.size}
                        key={index}
                        vn={planet.vietnamese}
                        eng={planet.english}
                        describe={planet.describe}
                        glb={planet.glb}
                        action={onSelectPlanet}
                        placement={index % 2 == 0 ? "left" : "right"}
                        image={planet.image}
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="999">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông báo</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShow(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Vào xem chi tiết về {planet}? Sẽ thú vị lắm đấy^^</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShow(false)}
                            >
                                Không
                            </button>
                            <button type="button" className="btn btn-primary" onClick={() => navigate(planetPath)}>
                                Được thôi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {show && <div className="modal-backdrop fade show"></div>}
        </div>

    );
}

export default Productions