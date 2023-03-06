import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { useResources } from "../../hooks/useResource";
import axios from "../../api/axios";
import { useToken } from "../../hooks/useToken";


export const SurgeryForm = () => {
    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [surgeryStartDate, setSurgeryStartDate] = useState('');
    const [surgeryEndDate, setEndSurgeryDate] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const patients = useResources("api/getUsersByRole/patient");
    const doctors = useResources("/api/getUsersByRole/doctor");
    const token = useToken("userToken");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const scheduleInfo = {
                "patient": patient,
                "doctor": doctor,
                "start_date": surgeryStartDate,
                "end_date": surgeryEndDate
            }

            await axios.post("/api/setEvent", scheduleInfo, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSuccessMsg("Successfully Scheduled the Surgery");
            setTimeout(()=>{
                setSuccessMsg('');
            },3000);
        } catch (e) {
            setErrMsg("Cannot Schedule the Surgery. Try Again...");
            setTimeout(()=>{
                setErrMsg('');
            },3000);
        }
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Schedule Surgery</h1>
                        </div>
                        <div className="container" style={{ marginLeft: 50 }}>
                            <div className='col-md-6 mt-5'>
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
                                    <Form.Group className="mb-4 mt-3" controlId="doctor">
                                        <Form.Label>Doctor</Form.Label>
                                        <Form.Select onChange={e => setDoctor(e.target.value)} value={doctor} >
                                            {doctors?.map(doctor => <option value={doctor.id} key={doctor.id}>{doctor.user_name}</option>)}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-4 mt-3" controlId="patient">
                                        <Form.Label>Patient</Form.Label>
                                        <Form.Select onChange={e => setPatient(e.target.value)} value={patient} >
                                            {patients?.map(patient => <option value={patient.id} key={patient.id}>{patient.user_name}</option>)}
                                        </Form.Select>
                                    </Form.Group>

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