import { useState } from "react";
import { useResources } from "../../hooks/useResource";
import { Form, Alert, Button } from "react-bootstrap";
import { useToken } from "../../hooks/useToken";
import axios from "../../api/axios";
import { SideBar } from "./SideBar";

export const SendNotification = () => {
    const [role, setRole] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState("");
    const token = useToken("userToken");

    const roles = useResources("/api/roles");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                "role": role,
                "subject": subject,
                "message": message
            }
            const response = await axios.post("/api/sendNotification", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const { success } = response.data;
            setSuccessMsg(success);
        } catch (e) {
            setErrMsg("Cannot Send Notifications. Try Again...")
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar />

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Send Notification</h1>
                    </div>
                    <div className="container" style={{ marginLeft: 50 }}>
                        <div className='col-md-6 mt-4'>
                            {errMsg && (
                                <Alert variant='danger'>
                                    {errMsg}
                                </Alert>
                            )}
                            {successMsg && (
                                <Alert variant='primary'>
                                    {successMsg}
                                </Alert>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3 mt-1" controlId="username">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text"
                                        value={subject}
                                        onChange={e => setSubject(e.target.value)}
                                        placeholder="Enter Subject"
                                        required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" value={message} onChange={e => setMessage(e.target.value)} rows={3} required />
                                </Form.Group>
                                <Form.Group className="mb-4 mt-3" controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select onChange={e => setRole(e.target.value)} >
                                        {roles?.map(r => <option value={r.id} key={r.id}>{r.name}</option>)}
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send Notifications
                                </Button>
                            </Form>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}