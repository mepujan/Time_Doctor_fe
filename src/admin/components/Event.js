import { Button, Card, Modal,Form } from "react-bootstrap";
import { useResources } from "../../hooks/useResource";
import { SideBar } from "./SideBar";
import { useState } from "react";

export const Events = () => {
    const [show, setShow] = useState(false);
    const [surgeryStartDate, setSurgeryStartDate] = useState('');
    const [surgeryEndDate, setEndSurgeryDate] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const formattedTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const events = useResources("/api/events");
    console.log(events);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reschedule Surgery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4 mt-3" controlId="formStartDate">
                            <Form.Label>Surgery Start Date Time</Form.Label>
                            <Form.Control type="datetime-local"
                                value={surgeryStartDate}
                                onChange={e => setSurgeryStartDate(e.target.value)}
                                placeholder="Select Date"
                                required />
                        </Form.Group>

                        <Form.Group className="mb-4 mt-3" controlId="formD">
                            <Form.Label>Surgery End Date Time </Form.Label>
                            <Form.Control type="datetime-local"
                                value={surgeryEndDate}
                                onChange={e => setEndSurgeryDate(e.target.value)}
                                placeholder="Select End Date time"
                                required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Reschedule
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Events</h1>
                        </div>
                        <div className="container">
                            <div className="row">
                                {events?.map((event) => (
                                    <div key={event.id} className="col-md-4">
                                        <Card className="mt-4" key={event.id} style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{event.attendees[1].email}</Card.Title>
                                                <Card.Text>Schedule Date Time</Card.Text>
                                                <Card.Text>{new Date(event.start.dateTime).toLocaleDateString()}</Card.Text>
                                                <Button variant="primary me-3" onClick={handleShow}>Reschedule</Button>
                                                <Button variant="danger">Delete</Button>
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