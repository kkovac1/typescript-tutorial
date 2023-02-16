import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './styles.css';
import { ICustomer } from '../models/ICustomer';
import Form from 'react-bootstrap/Form';

interface Properties {
    modalHeading: string;
    show: boolean;
    handleClose: () => void;
    handleSave: (data: ICustomer) => void;
    customer: ICustomer;
    setCustomer: React.Dispatch<React.SetStateAction<ICustomer>>;
}

const ModalForm: React.FC<Properties> = ({ modalHeading, show, handleClose, handleSave, customer, setCustomer }) => {

    // const [buttonClicked, setButtonClicked] = useState<string | null>(null);
    const [formValid, setFormValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const prop = e.target.name;
        const value = e.target.value;

        setCustomer((prev) => {
            return { ...prev, [prop]: value }
        })
    }

    var saveData = () => {
        if (customer) handleSave(customer);
        setCustomer({ id: Math.random(), firstName: "", lastName: "", email: "", city: "", birthDate: "" });
    }

    const validateForm = () => {
        const { firstName, lastName, email, city, birthDate } = customer;
        if (firstName && lastName && email && city && birthDate) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    useEffect(() => {
        validateForm();
    }, [customer]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="form1">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required name="firstName" value={customer?.firstName} onChange={handleChange} type="text" />

                        <Form.Label>Last name</Form.Label>
                        <Form.Control required name="lastName" value={customer?.lastName} onChange={handleChange} type="text" />

                        <Form.Label>E-mail</Form.Label>
                        <Form.Control required name="email" value={customer?.email} onChange={handleChange} type="email" placeholder='example@mail.com' />

                        <Form.Label>City</Form.Label>
                        <Form.Control required name="city" value={customer?.city} onChange={handleChange} type="text" />

                        <Form.Label>Birth date</Form.Label>
                        <Form.Control required name="birthDate" value={customer?.birthDate} onChange={handleChange} type="date" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveData} disabled={!formValid}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalForm;
