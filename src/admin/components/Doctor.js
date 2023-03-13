import { Button, Card } from "react-bootstrap";
import { useResources } from "../../hooks/useResource";
import { SideBar } from "./SideBar";


export const Doctor = () => {
    const doctors = useResources('/api/getUsersByRole/doctor');
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Doctors</h1>
                        </div>
                        <div className="container">
                            <div className="row">
                                {doctors?.map((doctor) => (
                                    <div key={doctor.id} className="col-md-4">
                                        <Card className="mt-4" key={doctor.id} style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={`http://` + doctor.profile_image} style={{ height: '16rem', objectFit:'cover' }} />
                                            <Card.Body>
                                                <Card.Title>{doctor.user_name}</Card.Title>
                                                <Card.Text>{doctor.email}</Card.Text>
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