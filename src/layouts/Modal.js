import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal({ isShow = false }) {
    const [show, setShow] = useState(isShow);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Mở Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tiêu đề Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Nội dung bên trong Modal.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;
