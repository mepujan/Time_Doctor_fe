import { Card } from "react-bootstrap";
export const EventList = ({ datas }) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div>
            <h6 style={{ fontSize: 10 }}>Scheduled Data</h6>

            {datas.map((event) => (
                <div key={event.id} className="col-md-4">
                    <Card className="mt-4" key={event.id} style={{ width: '12rem' }}>
                        <Card.Body style={{ fontSize: 8 }}>
                            <Card.Title style={{ fontSize: 8 }}>{event.attendees[1].email}</Card.Title>
                            <hr />
                            <Card.Text style={{ fontSize: 8 }}>Schedule Date Time</Card.Text>
                            <Card.Text style={{ fontSize: 8 }}><strong>From: </strong>
                                {new Date(event.start.dateTime).toLocaleString("en-US", options)} &nbsp;&nbsp;
                                {new Date(event.start.dateTime).toLocaleTimeString("en-US")}
                            </Card.Text>
                            <Card.Text style={{ fontSize: 8 }} ><strong>To: </strong>
                                {new Date(event.end.dateTime).toLocaleString("en-US", options)} &nbsp;&nbsp;
                                {new Date(event.end.dateTime).toLocaleTimeString("en-US")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}

        </div>
    )
} 