import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ICustomer } from "../models/ICustomer";
import moment from 'moment'

const CustomerDetails: React.FC = () => {
    let { id } = useParams();

    const [customer, setCustomer] = useState<ICustomer | null>(null);

    useEffect(() => {
        const res = fetch(`https://localhost:44324/api/Customers/get/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        res
        .then(res => res.json())
        .then((data: ICustomer) => {
            console.log(data);
            setCustomer(data);
        });
    }, [id]);

    const [show, setShow] = useState(false);

    // const handleClose = () => {
    //     setShow(false);
    // };

    // const handleShow = () => {
    //     setShow(true);
    // };

    return (
        <Card>
            <Card.Header>
                <div className="flex justify-content-between align-items-center">
                    <h5 className="m-0">Details</h5>
                    <div>
                        <Button className="mr-3" variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </div>
            </Card.Header>

            <Card.Body>
                {customer != null ? <Card.Text as="div">
                    <div>
                        <strong>Firstname:</strong> {customer.firstName}
                    </div>
                    <div>
                        <strong>Lastname:</strong> {customer.lastName}
                    </div>
                    <div>
                        <strong>E-mail:</strong> {customer.email}
                    </div>
                    <div>
                        <strong>City:</strong> {customer.city}
                    </div>
                    <div>
                        <strong>Birth date:</strong> { moment(customer.birthDate).format("DD.MM.YYYY.") }
                    </div>
                    <div>
                        <strong>Insurance price:</strong> {customer.insurancePrice}
                    </div>
                </Card.Text> 
                : null }
                

            </Card.Body>
        </Card>
    );
}

export default CustomerDetails;
