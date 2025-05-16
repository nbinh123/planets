import React, { useContext, useEffect, useState, Suspense, useRef } from "react";
import styles from "./detailPlanet.module.scss"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../../../../globalContext/GlobalContext";


import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import axios from "axios";

function DetailPlanet() {

    const planet = useParams()

    const [planetData, setPlanetData] = useState({
        image: null,
        title: null,
        description: null,
        size: null,
        modelUrl: null
    })

    const Model = ({ url, size = 1 }) => {

        const ref = useRef()
        const { scene } = useGLTF(url);
        return (
            <primitive
                ref={ref}
                object={scene}
                scale={0.1 * size}
                userData={{ isPaused: false }}
            />)
    };

    const ModelViewer = ({ modelUrl, size = 1 }) => {
        return (
            <Canvas camera={{ position: [0, 1.5, 3] }} style={{ height: "100vh" }}>
                <ambientLight />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <Model url={modelUrl} size={size}/>
                </Suspense>
                <OrbitControls />
            </Canvas>
        );
    };
    useEffect(() => {
        const fetch = async () => {
            async function getAPI(port = 5000, url, id = "", paramCondition) {
                const fullUrl = `http://localhost:${port}${url}${id ? `/${id}` : ""}`;

                try {
                    const response = await axios.get(fullUrl, {
                        params: paramCondition,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    return response.data;
                } catch (error) {
                    console.error(error); // Sử dụng console.error để log lỗi rõ ràng hơn
                    throw error; // Có thể throw để xử lý tiếp tục bên ngoài nếu cần
                }
            }
            const data = await getAPI(5000, "/user/findPlanet", "", {
                name: planet.planet
            })

            setPlanetData({
                image: data?.image,
                title: data?.title,
                description: data?.detailDescription,
                size: data?.modelSize,
                modelUrl: data?.glb
            })


        }
        fetch()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={planetData?.image} />
            </div>
            <div className={styles.content}>
                <h2>{planetData?.title}</h2>
                <span>{planetData?.description}</span>
            </div>
            <div className={styles.model} style={{ minHeight: "100vh" }}>
                <ModelViewer modelUrl={planetData?.modelUrl} size={planetData.size} />
            </div>
            <div>

            </div>
        </div>
    );
}

export default DetailPlanet;