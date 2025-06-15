import React, { useEffect, useState } from "react";
import styles from "./quizzTag.module.scss"

function Tag({ title, answers, correct }) {
    
    function AnswerTag({ ans, stt }) {
        return (
            <div className={styles.ansTag}>
                <p>{stt}</p>
                <p>{ans}</p>
            </div>
        )
    }
    let [data, setData] = useState(null)

    function shuffleArray(array) {
        // Tạo bản sao mảng nếu không muốn thay đổi mảng gốc
        const newArray = array.slice();

        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // chọn ngẫu nhiên chỉ số từ 0 đến i
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // hoán đổi phần tử
        }

        return newArray;
    }

    useEffect(() => {
        setData(answers)
    },[])


    return (
        <div className={styles.tag}>
            <p>{title}</p>
            <div className={styles.answers}>
                {data?.map((an, index) => {
                    return <AnswerTag 
                        ans={an}
                        stt={index}
                        key={index}
                    />
                })}
            </div>
        </div>
    )
}

function QuizzTag({ obj }) {


    return (
        <div className={styles.container}>
            <div className={styles.title}>
            </div>
            <div className={styles.content}>
                {obj?.questions.map((e, index) => {
                    return <Tag
                        title={e?.title}
                        answers={e?.answers}
                        correct={e?.answer}
                        key={index}
                    />
                })}
            </div>
        </div>
    );
}

export default QuizzTag;