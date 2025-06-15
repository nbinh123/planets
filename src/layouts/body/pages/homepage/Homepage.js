import React, { useEffect } from "react"
import styles from "./homepage.module.scss"

import image from "../homepage/flare.png"
import Quote from "./quote/Quote";

import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {

    useEffect(() => {
        AOS.init({
            duration: 1500,  // thời gian animation (ms)
            once: true,      // chỉ chạy 1 lần
        });
    }, []);

    return (
        <div className={`container-fluid ${styles.containe}`} >
            <Quote />
            <div className={`${styles.part_2} px-5 py-5`} data-aos="fade-right">
                <div className={styles.left}>
                    <div className={styles.title}>
                        <div>
                            <h1 className={styles.solarLab}>Solar Lab</h1>
                            <img src={image} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <p style={{ maxWidth: "200px" }}>
                                We've created SolarLab to share ideas and inspiration.
                                You can vote here for the best ideas, find all news,
                                releases, as well as things we're currently working on.
                            </p>
                        </div>
                    </div>
                    <div className={styles.joinWithUs}>
                        <button type="button" class="btn btn-light">JOIN US IN THE LAB!</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="https://www.solarsystemscope.com/images/screenshots/solar_lab_art_1.png" />
                </div>
            </div>
            <div className={`${styles.suitable} px-5 py-5`} data-aos="fade-left">
                <h2>Who is <span>IT</span> suitable for?</h2>
                <p>This website is specially designed for young explorers aged 6 to 12 who are curious about the wonders of space. Whether your child is just starting to learn about the solar system or already fascinated by planets and stars, our fun, colorful, and easy-to-understand content will spark their imagination. It's perfect for students, teachers looking for classroom resources, or parents who want to support their child's learning at home. With interactive features, games, and facts tailored for kids, this site makes space education exciting and enjoyable for everyone!</p>
                <img src="/images/children.png"></img>
            </div>
        </div >
    );
}

export default Homepage