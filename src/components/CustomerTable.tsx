import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { ICustomer } from '../models/ICustomer';
import './styles.css';

interface Properties {
    customers: ICustomer[];
    setCustomers: React.Dispatch<React.SetStateAction<ICustomer[]>>;
}

const CustomerTable: React.FC<Properties> = ({ customers, setCustomers }) => {

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>City</th>
                    <th>Birth date</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.city}</td>
                        <td>{customer.birthDate}</td>
                        <td>
                            <Link to={`/customer/${customer.id}`}>
                                <Button variant="outline-primary">Details</Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default CustomerTable;
