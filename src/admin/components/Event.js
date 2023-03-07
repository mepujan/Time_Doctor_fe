import { Button, Card, Modal, Form,Alert } from "react-bootstrap";
import { useResources } from "../../hooks/useResource";
import { SideBar } from "./SideBar";
import { useState } from "react";
import axios from "../../api/axios";
import { useToken } from "../../hooks/useToken";

export const Events = () => {
    const [show, setShow] = useState(false);
    const [surgeryStartDate, setSurgeryStartDate] = useState(new Date());
    const [surgeryEndDate, setEndSurgeryDate] = useState(new Date());
    const [eventId, setEventId] = useState('');
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const dateTimeLocal = (date) => {
        const dt = new Date(date);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
        return dt.toISOString().slice(0, 16);

    }

    const handleClose = () => setShow(false);
    const handleShow = (id, start_date, end_date) => {
        setSurgeryStartDate(dateTimeLocal(start_date));
        setEndSurgeryDate(dateTimeLocal(end_date));
        setEventId(id);

        console.log("Start -> ", start_date);
        console.log("end ->", end_date);
        setShow(true);
    }
    const token = useToken("userToken");
    const events = useResources("/api/events");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const newEventsDate = {
                "start_date": surgeryStartDate,
                "end_date": surgeryEndDate,
                "eventId": eventId
            }

            console.log(newEventsDate);
            await axios.patch("/api/reschedule", newEventsDate, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setSuccess("Successfully Reschedule the Surgery.")
            setShow(false);
            setTimeout(()=>{
                setSuccess('');
            },5000);

        } catch (e) {
            setError("Surgery Re-scheduling Failed. Try Again...");
            setTimeout(()=>{
                setError('');
            },3000);
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reschedule Surgery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
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
                    <Button variant="primary" onClick={handleSubmit}>
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
                        {error && (
                                    <Alert variant='danger'>
                                        {error}
                                    </Alert>
                                )}
                                {success && (
                                    <Alert variant='primary'>
                                        {success}
                                    </Alert>
                                )}
                            <div className="row">
                                {events?.map((event) => (
                                    <div key={event.id} className="col-md-4">
                                        <Card className="mt-4" key={event.id} style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{event.attendees[1].email}</Card.Title>
                                                <hr/>
                                                <Card.Text>Schedule Date Time</Card.Text>
                                                <Card.Text><strong>From: </strong>
                                                    {new Date(event.start.dateTime).toLocaleString("en-US", options)} &nbsp;&nbsp;
                                                    {new Date(event.start.dateTime).toLocaleTimeString("en-US")}
                                                </Card.Text>
                                                <Card.Text><strong>To: </strong>
                                                    {new Date(event.end.dateTime).toLocaleString("en-US", options)} &nbsp;&nbsp;
                                                    {new Date(event.end.dateTime).toLocaleTimeString("en-US")}
                                                </Card.Text>
                                                <Button variant="primary me-3" onClick={() => handleShow(event.id, event.start.dateTime, event.end.dateTime)}>Reschedule</Button>
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