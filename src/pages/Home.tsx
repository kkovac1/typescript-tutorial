import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomerTable from '../components/CustomerTable';
import ModalForm from '../components/ModalForm';
import { ICustomer } from '../models/ICustomer';

const Home: React.FC = () => {
    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [customer, setCustomer] = useState<ICustomer>({ id: Math.random(), firstName: "", lastName: "", email: "", city: "", birthDate: "", insurancePrice: 0 });

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
        setCustomer({ id: Math.random(), firstName: "", lastName: "", email: "", city: "", birthDate: "", insurancePrice: 0 });
    };
    
    useEffect(() => {
        const res = fetch("https://localhost:44324/api/Customers/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        res
        .then(res => res.json())
        .then((data: ICustomer[]) => {
            console.log(data);
            setCustomers(data);
        });
    }, []);

    return (
        <div className="App">
            <ModalForm modalHeading='Add customer' show={show} handleClose={handleClose} handleSave={handleSave} customer={customer} setCustomer={setCustomer} />
            <Button onClick={handleShow} variant="outline-primary">Add new user</Button>
            <CustomerTable customers={customers} setCustomers={setCustomers} />
        </div>
    );
}

export default Home;
