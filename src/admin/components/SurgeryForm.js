import { Form, Button, Alert, Stack } from "react-bootstrap";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { useResources } from "../../hooks/useResource";
import axios from "../../api/axios";
import { useToken } from "../../hooks/useToken";
import ImportButton from "./importButton";



export const SurgeryForm = () => {
    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [surgeryStartDate, setSurgeryStartDate] = useState('');
    const [surgeryEndDate, setEndSurgeryDate] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [important, setImportant] = useState(false);
    const [surgeryType, setSurgeryType] = useState();
    const [roomNumber, setRoomNumber] = useState();

    const patients = useResources("api/getUsersByRole/patient");
    const doctors = useResources("/api/getUsersByRole/doctor");
    const rooms = useResources("/api/room")
    const token = useToken("userToken");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const scheduleInfo = {
                "patient": patient,
                "doctor": doctor,
                "start_date": surgeryStartDate,
                "end_date": surgeryEndDate,
                "surgeryTypeId": surgeryType,
                "important": important,
                "surgeryRoomId": roomNumber
            }

            await axios.post("/api/setEvent", scheduleInfo, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSuccessMsg("Successfully Scheduled the Surgery");
            setTimeout(() => {
                setSuccessMsg('');
            }, 3000);
        } catch (e) {
            setErrMsg("Cannot Schedule the Surgery. Try Again...");
            setTimeout(() => {
                setErrMsg('');
            }, 3000);
        }
    }

    const boolArray = ["true", "false"];
    const SurgeryTypes = useResources("api/surgeryType");


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Schedule Surgery</h1>
                        </div>
                        <Stack direction="horizontal">
                            <div className='col-md-6 mt-3'>
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

                                    <Form.Group className="mb-4 mt-3" controlId="surgerytype">
                                        <Form.Label>Surgery Type</Form.Label>
                                        <Form.Select value={surgeryType} onChange={e => setSurgeryType(e.target.value)}>
                                            {SurgeryTypes?.map(type => <option value={type.id} key={type.id}>{type.name}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-4 mt-3" controlId="roomNumber">
                                        <Form.Label>Room Number</Form.Label>
                                        <Form.Select value={roomNumber} onChange={e => setRoomNumber(e.target.value)}>
                                            {rooms?.map(room => <option value={room.id} key={room.id}>{room.number}</option>)}
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

                                    <Form.Group className="mb-4 mt-3" controlId="important">
                                        <Form.Label>Important</Form.Label>
                                        <Form.Select value={important} onChange={e => setImportant(e.target.value)}>
                                            {boolArray?.map(data => <option value={data} key={data}>{data}</option>)}
                                        </Form.Select>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Schedule Surgery
                                    </Button>
                                </Form>

                            </div>

                            <div className="container col-md-6 p-3 m-3" style={{ backgroundColor: "#D3D3D3", position: "relative", top: -160 }}>

                                <ImportButton />
                            </div>
                        </Stack>

                    </main>

                </div>
            </div >

        </>
    )
}