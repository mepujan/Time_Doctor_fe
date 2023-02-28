import { Nav, Button, Card } from "react-bootstrap";
import { useResources } from "../../hooks/useResource";


export const Patient = () => {
    const patients = useResources('/api/getUsersByRole/patient');
    console.log(patients);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Nav.Link href="/admin/dashboard">
                                        <span data-feather="home"></span>
                                        Back to DashBoard
                                    </Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </Nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Patients</h1>
                        </div>
                        <div className="container">
                            <div className="row">
                            {patients?.map((patient) => (
                                <div className="col-md-4">
                                <Card className="mt-4" key={patient.id} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={patient.profile_image} style={{height:"13rem"}} />
                                    <Card.Body>
                                        <Card.Title>{patient.user_name}</Card.Title>
                                        <Card.Text>{patient.email}</Card.Text>
                                        <Button variant="primary">More Info</Button>
                                    </Card.Body>
                                </Card>
                                </div>
                            ))}
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}