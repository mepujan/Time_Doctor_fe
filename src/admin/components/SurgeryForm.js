import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { SideBar } from "./SideBar";


export const SurgeryForm = () => {
    const [patientId, setPatientId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [surgeryDate, setSurgeryDate] = useState('');
    const [surgeryTime, setSurgeryTime] = useState('');
    
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Schedule Surgery</h1>
                        </div>
                        <div className="container" style={{marginLeft:50}}>
                                <div className='col-md-6 mt-5'>
                                    {/* {errMsg && (
                                        <Alert variant='danger'>
                                            {errMsg}
                                        </Alert>
                                    )}
                                    {successMsg && (
                                        <Alert variant='primary'>
                                            {successMsg}
                                        </Alert>
                                    )} */}
                                    <Form encType='multipart/form-data'>
                                        <Form.Group className="mb-3 mt-1" controlId="firstname">
                                            <Form.Label>Patient ID</Form.Label>
                                            <Form.Control type="text"
                                                value={patientId}
                                                onChange={e => setPatientId(e.target.value)}
                                                placeholder="Enter Patient ID"
                                                required />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mt-1" controlId="middlename">
                                            <Form.Label>Doctor ID</Form.Label>
                                            <Form.Control type="text"
                                                value={doctorId}
                                                onChange={e => setDoctorId(e.target.value)}
                                                placeholder="Enter Doctor ID"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4 mt-3" controlId="formDOB">
                                            <Form.Label>Surgery Date</Form.Label>
                                            <Form.Control type="datetime-local"
                                                value={surgeryDate}
                                                onChange={e => setSurgeryDate(e.target.value)}
                                                placeholder="Select Date"
                                                required />
                                        </Form.Group>

                                        <Form.Group className="mb-4 mt-3" controlId="formDOB">
                                            <Form.Label>Surgery Time</Form.Label>
                                            <Form.Control type="time"
                                                value={surgeryTime}
                                                onChange={e => setSurgeryTime(e.target.value)}
                                                placeholder="Select Time"
                                                required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Schedule Surgery
                                        </Button>
                                    </Form>
                                </div>
                                <div className='col-md-3'></div>
                            </div>
                    </main>
                </div>
            </div>

        </>
    )
}