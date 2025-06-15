import React, { useRef } from "react";
import styles from "./quizz.module.scss"
import QuizzTag from "./tag/QuizzTag";

function Quizz() {

    const data = useRef(
        [
            {
                planet: "sun",
                questions: [
                    {
                        title: "Mặt trời là gì?",
                        answers: ["Hành tinh", "Ngôi sao", "Vệ tinh", "Thiên thạch"],
                        answer: "Ngôi sao"
                    },
                    {
                        title: "Thành phần chính của Mặt trời là gì?",
                        answers: ["Hydro và Heli", "Oxy", "Carbon", "Nitơ"],
                        answer: "Hydro và Heli"
                    },
                    {
                        title: "Mặt trời nằm ở trung tâm của?",
                        answers: ["Ngân Hà", "Hệ Mặt Trời", "Thiên Hà Andromeda", "Vũ trụ"],
                        answer: "Hệ Mặt Trời"
                    },
                    {
                        title: "Nhiệt độ bề mặt của Mặt trời khoảng?",
                        answers: ["6,000°C", "15,000°C", "1,000°C", "100°C"],
                        answer: "6,000°C"
                    },
                    {
                        title: "Mặt trời lớn hơn Trái Đất bao nhiêu lần về thể tích?",
                        answers: ["Khoảng 1 triệu lần", "100 lần", "10 nghìn lần", "1 tỷ lần"],
                        answer: "Khoảng 1 triệu lần"
                    },
                    {
                        title: "Nguồn năng lượng của Mặt trời đến từ quá trình nào?",
                        answers: ["Nhiệt phân", "Phản ứng hạt nhân tổng hợp", "Phóng xạ", "Đốt cháy khí"],
                        answer: "Phản ứng hạt nhân tổng hợp"
                    },
                    {
                        title: "Ánh sáng từ Mặt trời mất bao lâu để đến Trái Đất?",
                        answers: ["8 phút", "1 giây", "30 phút", "1 giờ"],
                        answer: "8 phút"
                    }
                ],
                link: "https://vi.wikipedia.org/wiki/Mặt_Trời"
            },
            {
                planet: "mercury",
                questions: [
                    {
                        title: "Sao Thủy là hành tinh gần Mặt trời nhất?",
                        answers: ["Đúng", "Sai"],
                        answer: "Đúng"
                    },
                    {
                        title: "Sao Thủy có bầu khí quyển không?",
                        answers: ["Có", "Không"],
                        answer: "Không"
                    },
                    {
                        title: "Một năm trên Sao Thủy kéo dài khoảng bao lâu (ngày Trái Đất)?",
                        answers: ["88 ngày", "365 ngày", "225 ngày", "30 ngày"],
                        answer: "88 ngày"
                    },
                    {
                        title: "Bề mặt Sao Thủy giống với?",
                        answers: ["Mặt trăng", "Sao Hỏa", "Trái Đất", "Sao Kim"],
                        answer: "Mặt trăng"
                    },
                    {
                        title: "Sao Thủy có vệ tinh tự nhiên không?",
                        answers: ["Có", "Không"],
                        answer: "Không"
                    },
                    {
                        title: "Sao Thủy quay quanh trục mất bao lâu?",
                        answers: ["59 ngày", "1 ngày", "88 ngày", "10 ngày"],
                        answer: "59 ngày"
                    },
                    {
                        title: "Tên gọi Mercury bắt nguồn từ?",
                        answers: ["Thần Hermes", "Thần chiến tranh", "Thần đưa tin", "Thần tình yêu"],
                        answer: "Thần đưa tin"
                    }
                ],
                link: "https://vi.wikipedia.org/wiki/Sao_Thủy"
            },
            {
                planet: "venus",
                questions: [
                    {
                        title: "Sao Kim còn được gọi là gì?",
                        answers: ["Hành tinh đỏ", "Sao mai/Sao hôm", "Hành tinh băng", "Sao tím"],
                        answer: "Sao mai/Sao hôm"
                    },
                    {
                        title: "Khí quyển Sao Kim dày đặc với thành phần chủ yếu là?",
                        answers: ["Carbon dioxide", "Oxy", "Hydro", "Nitơ"],
                        answer: "Carbon dioxide"
                    },
                    {
                        title: "Sao Kim có quay theo chiều ngược với hầu hết các hành tinh khác không?",
                        answers: ["Có", "Không"],
                        answer: "Có"
                    },
                    {
                        title: "Sao Kim nóng hơn Trái Đất vì?",
                        answers: ["Hiệu ứng nhà kính", "Gần Mặt trời hơn", "Có nhiều núi lửa", "Không có mây"],
                        answer: "Hiệu ứng nhà kính"
                    },
                    {
                        title: "Sao Kim có vệ tinh không?",
                        answers: ["Có", "Không"],
                        answer: "Không"
                    },
                    {
                        title: "Bề mặt Sao Kim chủ yếu là?",
                        answers: ["Núi lửa và đồng bằng dung nham", "Nước", "Băng tuyết", "Đồng cỏ"],
                        answer: "Núi lửa và đồng bằng dung nham"
                    },
                    {
                        title: "Một ngày trên Sao Kim dài hơn?",
                        answers: ["Một năm của nó", "Một ngày Trái Đất", "Một tuần Trái Đất", "Không rõ"],
                        answer: "Một năm của nó"
                    }
                ],
                link: "https://vi.wikipedia.org/wiki/Sao_Kim"
            }
        ]
    )

    return (
        <div className={`${styles.container} py-5 my-5`}>
            {data.current.map((element) => {
                return <QuizzTag obj={element}/>
            })}
        </div>
    );
}

export default Quizz;