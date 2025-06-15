import React, { useEffect, useRef, useContext, useState } from "react";
import styles from "./chooseQuizz.module.scss"
import { GlobalContext } from "../../../../../globalContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import "./quiz.css"

function ChooseQuizz() {

    const naviage = useNavigate()
    const { customedAxios } = useContext(GlobalContext)
    const [show, setShow] = useState(false);
    
    const [modalContent, setModalContent] = useState(null)
    const [modalAction, setModalAction] = useState(() => {})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function get() {
            await customedAxios.get("5000", "/haha")
                // .then(quizzData => console.log(quizzData))
        }
        // get()
    }, [])
    const choose = useRef([
        {
            image: "",
            title: "Kiến thức tổng quát về hệ mặt trời",
            href: "all"
        }, {
            image: "",
            title: "Những hành tinh cụ thể",
            href: "detail"
        }
    ])

    useEffect(() => {
        if (show) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [show]);


    return (
        <div className={`${styles.container} py-5 my-5`}>
            <div className={`${styles.title} mb-3`}>
                <h1>Bạn muốn bộ câu hỏi về:</h1>
            </div>
            {choose.current.map((e) => {
                return <Tag
                    image={e.image}
                    title={e.title}
                    onNav={naviage}
                    showModal={handleShow}
                    closeModal={handleClose}
                    setContent={setModalContent}
                    setTrue={setModalAction}
                    href={e.href}
                />
            })}
            <div className={`${styles.title} mb-3`}>
                <h1>Hoặc</h1>
            </div>
            <Tag
                image={choose.current[0].image}
                title={"Sáng tạo bộ câu hỏi riêng"}
                onNav={naviage}
                href="custom"
                showModal={handleShow}
                closeModal={handleClose}
                setContent={setModalContent}
                setTrue={setModalAction}
            />
            <div className={styles.modal}>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton className="px-4">
                        <Modal.Title className="h5">Xác nhận lựa chọn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="px-4">{modalContent}</Modal.Body>
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
        </div>
    );
}

function Tag({ image, title, href = "all", showModal, setContent, setTrue, onNav }) {

    const onTrue = () => {
        onNav(`${href}`)
    }

    const onShow = () => {
        setContent(`${!(href == "custom") ? `${title}` : `Bạn muốn "custom" bộ câu hỏi riêng ? `}`)
        setTrue(() => onTrue)
        showModal()
    }

    return (
        <div className={styles.tag} onClick={onShow}>
            <img src={image} />
            <p>{title}</p>
        </div>
    )
}


export default ChooseQuizz;