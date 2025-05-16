import React, { useContext, useRef, useEffect } from "react";
import styles from "./quote.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { GlobalContext } from "../../../../../globalContext/GlobalContext";

import AOS from "aos";
import "aos/dist/aos.css";

function Quote() {

    useEffect(() => {
        AOS.init({
            duration: 1000,  // thời gian animation (ms)
            once: true,      // chỉ chạy 1 lần
        });
    }, []);

    const { tools } = useContext(GlobalContext);

    const quotesList = useRef([
        {
            content: "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
            author: "Konstantin Tsiolkovsky"
        },
        {
            content: "Somewhere, something incredible is waiting to be known.",
            author: "Carl Sagan"
        },
        {
            content: "Across the sea of space, the stars are other suns.",
            author: "Carl Sagan"
        },
        {
            content: "The planets are not just wandering rocks. They are worlds in their own right.",
            author: "Brian Cox"
        },
        {
            content: "We are part of this universe; we are in this universe, but perhaps more important than both of those facts is that the universe is in us.",
            author: "Neil deGrasse Tyson"
        },
        {
            content: "Mars is there, waiting to be reached.",
            author: "Buzz Aldrin"
        },
        {
            content: "Venus is like Earth's evil twin. It’s almost the same size, but everything about it is deadly.",
            author: "Bill Nye"
        },
        {
            content: "The Solar System is a dynamic and amazing place. Each world is like a different experiment in planetology.",
            author: "Emily Lakdawalla"
        },
        {
            content: "Exploration is wired into our brains. If we can see the horizon, we want to know what’s beyond.",
            author: "Buzz Aldrin"
        },
        {
            content: "Looking at the planets makes us realize how unique and fragile our own world is.",
            author: "Chris Hadfield"
        }
    ])

    const onRenderNewQuote = () => {
        if (quoteRef.current == null) return;
        const randomInt = tools.getRandomInt(0, 9);
        authorRef.current.innerText = `- ${quotesList.current[randomInt].author} -`;
        quoteRef.current.innerText = quotesList.current[randomInt].content;
    }

    const onLike = () => {
        if (likeRef.current == null) return;
        const randomLike = tools.getRandomInt(100, 200);
        likeRef.current.innerText = `${randomLike}`;
    }

    const quoteRef = useRef(null)
    const likeRef = useRef(null)
    const authorRef = useRef(null)

    return (
        <div className={styles.container} data-aos="zoom-in-up">
            <div className={styles.content}>
                <span ref={quoteRef}>Cosmos is a Greek word for the order of the universe. It is, in a way, the opposite of Chaos. It implies the deep interconnectedness of all things. It conveys awe for the intricate and subtle way in which the universe is put together.</span>

            </div>
            <div className={styles.buttons}>
                <div className={styles.diff}>
                    <button onClick={onLike}><FontAwesomeIcon icon={faThumbsUp} /> <span ref={likeRef}>I LIKE IT</span></button>
                    <button onClick={onRenderNewQuote}> NEW QUOTES</button>
                    <span ref={authorRef} className={styles.author}>- Carl Sagan</span>
                </div>
                <div className={styles.images}>
                    <img className={styles.flare} src="./images/flare.png" />
                    <img className={styles.jupiter} src="./images/jupiter.png" />
                </div>
                <div className={styles.welcome} data-aos="fade-left">
                    <h1>WELCOME SPACE EXPLORER</h1>
                    <p>Solar System Scope is a model of Solar System, Night sky and Outer Space in real time, with accurate positions of objects and lots of interesting facts.</p>
                    <div className={styles.more}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faStar} size={24} />
                        </div>
                        <span>We hope you will have as much fun exploring the universe with our app as do we while making it :)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;