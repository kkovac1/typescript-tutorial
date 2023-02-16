import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomerTable from '../components/CustomerTable';
import ModalForm from '../components/ModalForm';
import { ICustomer } from '../models/ICustomer';

const Home: React.FC = () => {
    const [customers, setCustomers] = useState<ICustomer[]>([
        { id: 1, firstName: "Marko", lastName: "Perkovic", email: "thompson@mail.com", city: "Čavoglave", birthDate: "10.10.1980." },
        { id: 2, firstName: "Test", lastName: "Last", email: "ttt@mail.com", city: "Vinkovci", birthDate: "10.10.1981." }
    ]);
    const [customer, setCustomer] = useState<ICustomer>({ id: Math.random(), firstName: "", lastName: "", email: "", city: "", birthDate: "" });

    const [show, setShow] = useState(false);

    const handleSave = (data: ICustomer) => {
        setShow(false);
        setCustomers([...customers, data]);
    }
    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
        setCustomer({ id: Math.random(), firstName: "", lastName: "", email: "", city: "", birthDate: "" });
    };

    return (
        <div className="App">
            <h2 className='heading'>Customers</h2>
            <ModalForm modalHeading='Add customer' show={show} handleClose={handleClose} handleSave={handleSave} customer={customer} setCustomer={setCustomer} />
            <Button onClick={handleShow} variant="outline-primary">Add new user</Button>
            <CustomerTable customers={customers} setCustomers={setCustomers} />
        </div>
    );
}

export default Home;
