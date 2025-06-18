import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from "./QType.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button } from "react-bootstrap";

function Detail() {
    const planets = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Sun"
    ];

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const [modalContent, setModalContent] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedPlanets, setSelectedPlanets] = useState([]);

    const modalAction = () => {
        // Bước 1: Chuyển mảng thành chuỗi JSON
        const jsonPlanets = JSON.stringify(selectedPlanets);

        // Bước 2: Lưu vào localStorage
        localStorage.setItem("jsonPlanets", jsonPlanets);

        navigate("/quizz/play/detail")
    }

    const handleToggle = (planet) => {
        setSelectedPlanets((prevSelected) =>
            prevSelected.includes(planet)
                ? prevSelected.filter((p) => p !== planet)
                : [...prevSelected, planet]
        );
    };
    function Tag({ planet }) {

        const [isSelected, setIsSelected] = useState()
        useEffect(() => {
            setIsSelected(selectedPlanets.includes(planet))
        }, [selectedPlanets])

        return (
            <div className={`${styles.tag} ${isSelected ? styles.select : ""}`} onClick={() => handleToggle(planet)}>
                <p>{planet}</p>
            </div>
        )
    }
    return (
        <div className={styles.route}>
            <div style={{ padding: "20px", fontFamily: "Arial" }} className="mb-5">
                <h2>Chọn các hành tinh cho bộ câu hỏi của bạn</h2>
                <div className={styles.list}>
                    {planets.map((planet, index) => <Tag planet={planet} key={index} />)}
                </div>

                <div className={`${styles.result} mt-5`}>
                    <div className={styles.f1}>
                        <h3>Hành tinh đã chọn:</h3>
                        <p>{selectedPlanets.length > 0 ? selectedPlanets.join(", ") : "Chưa chọn hành tinh nào."}</p>
                    </div>
                    <div className={styles.f2} onClick={handleShow}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <FontAwesomeIcon icon={faAngleRight} />
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className="px-4">
                    <Modal.Title className="h5">Xác nhận lựa chọn</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4">{`Xác nhận chọn ${selectedPlanets.join()}`}</Modal.Body>
                <Modal.Footer className="px-4">
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleClose()
                        modalAction()
                    }}>
                        Đúng rồi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function Custom() {
    return (
        <div className={styles.route}>
            <p>Custom</p>
        </div>
    )
}


function QTypes() {

    const [component, setComponent] = useState(null)
    const { type } = useParams()

    const naviage = useNavigate()
    useEffect(() => {

    }, [])

    useEffect(() => {
        if (type) {
            switch (type) {
                case "all":
                    naviage("/quizz/play")
                    break;
                case "detail":
                    setComponent(<Detail />)
                    break;
                case "custom":
                    setComponent(<Custom />)
                    break;
                default:
                    break;
            }
        }
    }, [])
    return (
        <div className={`${styles.container} py-5 mt-5`}>
            {/* <div className={styles.title}>
                <h2>Chọn</h2>
            </div> */}
            <div className={styles.content}>
                {component}
            </div>
        </div>
    );
}

export default QTypes;