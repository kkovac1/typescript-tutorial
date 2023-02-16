import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";


const CustomerDetails: React.FC = () => {
    let { id } = useParams();
    const customer = { id: 1, firstName: "Marko", lastName: "Perkovic", email: "thompson@mail.com", city: "Čavoglave", birthDate: "10.10.1980." };

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
                <Card.Text as="div">
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
                        <strong>Birth date:</strong> {customer.birthDate}
                    </div>
                    <div>
                        <strong>Insurance price:</strong> 1
                    </div>
                </Card.Text>
                <Button variant="primary">Calculate insurance price</Button>

            </Card.Body>
        </Card>
    );
}

export default CustomerDetails;
