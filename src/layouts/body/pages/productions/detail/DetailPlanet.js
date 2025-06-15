import React, { useEffect, useState, useRef } from "react";
import styles from "./detailPlanet.module.scss";
import { useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


function DetailPlanet({ image, title, detailDescribe, size, modelUrl }) {
    const { planet } = useParams();

    useEffect(() => {
        AOS.init({
            duration: 1500,  // thời gian animation (ms)
            once: true,      // chỉ chạy 1 lần
        });
    }, []);

    return (
        <div className={styles.container} data-aos="fade-right">
            <div className={styles.title}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <span>{detailDescribe}</span>
            </div>
        </div>
    );
}

export default DetailPlanet;
