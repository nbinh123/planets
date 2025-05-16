import React, { useRef, useEffect } from "react"
import styles from "./introduce.module.scss"

import AOS from "aos";
import "aos/dist/aos.css";

function Tag({ avatar, name, describe, index = 0 }) {
    return (
        <div className={styles.tag} data-aos="fade-up" data-aos-delay={index * 300}>
            <img src="/images/person.jpg" />
            <p className={styles.name}>{name}</p>
            <p className={styles.describe}>{describe}</p>
        </div>
    )
}

function CommissionTag({ img, content, title, index = 0 }) {
    return (
        <div
            className={`${styles.ct} card mb-3`}
            style={{ maxWidth: "40%", backgroundColor: "transparent", color: "white", border: "1px solid #82C3CF", margin: "0 1.5rem", borderRadius: "15px", padding: "0 1.5rem" }}
            data-aos="fade-up" data-aos-offset="300"
        >
            <div class="row g-0">
                <div class="col-md-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={img} class="img-fluid " alt="..." />

                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Introduce() {

    const data = useRef([
        {
            name: "Binh",
            describe: "Came up with the idea of Solar. Nowadays both a designer and a developer. Would very much like to visit low orbit some day",
            avatar: "/images/person/jpg"
        }, {
            name: "Khanh",
            describe: "Came up with the idea of Solar. Nowadays both a designer and a developer. Would very much like to visit low orbit some day",
            avatar: "/images/person/jpg"
        }, {
            name: "Nguyen",
            describe: "Came up with the idea of Solar. Nowadays both a designer and a developer. Would very much like to visit low orbit some day",
            avatar: "/images/person/jpg"
        }, {
            name: "Thao",
            describe: "Came up with the idea of Solar. Nowadays both a designer and a developer. Would very much like to visit low orbit some day",
            avatar: "/images/person/jpg"
        }
    ])
    const commissionTag = useRef([
        {
            title: "<Title>",
            img: "/images/commissions/spoonli.png",
            content: "Solar System Scope as a part of educational software for portuguese schools"
        }, {
            title: "<Title>",
            img: "/images/commissions/sanbyte.png",
            content: "Customization of Solar System Scope for Chinese market or the other market",
        }, {
            title: "<Title>",
            img: "/images/commissions/sanbyte.png",
            content: "Adjusting Solar System Scope for multitouch screen table and adding a queez game"
        }, {
            title: "<Title>",
            img: "/images/commissions/spoonli.png",
            content: "Website of astronomy project with own version of Solar System App that helping children study"
        }
    ])

    useEffect(() => {
        AOS.init({
            duration: 1500,  // thời gian animation (ms)
            once: true,      // chỉ chạy 1 lần
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.intro} data-aos="fade-up" data-aos-offset="300">
                <h1 class="py-5">SOLAR SYSTEM APP</h1>
                <p style={{ fontSize: "14px" }}>Solar System Scope was first presented in 2010</p>
                <p style={{ fontWeight: "bold" }}>Thanks to amazing support of users, editors and webmasters</p>
                <p>who shared and published it everywhere imaginable, it became one of the most popular space sites today.</p>
                <p>Every once in a while, we update the model with most popular ideas, but every suggestion counts - so please let us know what you think of our Scope model.</p>
            </div>
            <div className={styles.title}>
                <h1>DEVELOPER TEAM</h1>
                <p>We are Space Enthusiasts, Software engineers, Designers and other Geeks, mostly from Viet Nam.</p>
            </div>
            <div className={styles.content}>

                {data.current.map((element, index) => {
                    return <Tag
                        avatar={element.avatar}
                        name={element.name}
                        describe={element.describe}
                        key={index}
                        index={index}
                    />
                })}
            </div>
            <div className={styles.credit} data-aos="fade-up" data-aos-offset="300">
                <img src="/images/mar.png" />
                <h1>CREDITS: NASA</h1>
                <p>Solar System Scope calculations are based on orbital parameters published by NASA.</p>
                <p>Solar System Scope unique planet maps are based on NASA elevation and imagery data</p>
                <p>Colors and shades of the textures are tuned according to true-color photos made by Messenger, Viking, Cassini and new horizon spacecrafts, and the Hubble Space Telescope.</p>

            </div>
            <div className={styles.commission}>
                <h1 data-aos="fade-up" data-aos-offset="300">Commissions</h1>
                <div className={styles.com}>
                    {commissionTag.current.map((element, index) => <CommissionTag
                        img={element.img}
                        content={element.content}
                        title={element.title}
                        index={element.index}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default Introduce