import { useResources } from "../hooks/useResource";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useToken } from "../hooks/useToken";


const GenderOptions = ['male', 'female', 'others'];
const BloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];


export const Profile = () => {

    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState(GenderOptions[0]);
    const [role, setRole] = useState();
    const [dob, setDOB] = useState('');
    const [bloodGroup, setBloodGroup] = useState(BloodGroupOptions[0]);
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const token = useToken("userToken");
    const profileImage = useToken("profile_pic");
    const imageUrl = `http://${profileImage}`;

    useEffect(() => {
        const getLoggedInUser = async () => {
            const res = await axios.get("/api/getLoggedInUser", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(res.data);
            setFirstName(res.data.first_name);
            setMiddleName(res.data.middle_name);
            setLastName(res.data.last_name);
            setMobileNumber(res.data.mobile_number);
            setEmail(res.data.email);
            setAddress(res.data.address)
            setDOB(res.data.dob);
            setUserName(res.data.user_name);
            setBloodGroup(res.data.blood_group);
            setRole(res.data.role_id);
            setGender(res.data.gender);
        }
        getLoggedInUser();
    }, [token]);

    const roles = useResources("/api/roles");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('middle_name', middleName);
            formData.append('email', email);
            formData.append('user_name', userName);
            formData.append('address', address);
            formData.append('mobile_number', mobileNumber);
            formData.append('dob', dob);
            formData.append('role_id', role);
            formData.append('gender', gender);
            formData.append('blood_group', bloodGroup);

            await axios.put("/api/updateUser", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(formData);
            setSuccessMsg("User Updated Successfully");
            setFirstName("");
            setLastName("");
            setMiddleName("");
            setMobileNumber("");
            setEmail("");
            setAddress("")
            setDOB("");
            setTimeout(function () {
                setSuccessMsg("");
            }, 3000);

        } catch (e) {
            setErrMsg("Something Went Wrong. Try Again...")
            console.log(e)
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Update Account</h1>
                        </div>
                        <div className="container" style={{ marginLeft: 50 }}>
                            <div>
                                <img src={imageUrl} alt="profile"
                                    width="100"
                                    height="100"
                                    style={{ objectFit: "cover" }}
                                    className="rounded-circle align-top ms-4" />
                                <p className="ms-4">{firstName} {lastName}</p>
                            </div>
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
                                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                                    <Form.Group className="mb-3 mt-1" controlId="firstname">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            placeholder="Enter First Name"
                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-3 mt-1" controlId="middlename">
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control type="text"
                                            value={middleName}
                                            onChange={e => setMiddleName(e.target.value)}
                                            placeholder="Enter Middle Name"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 mt-1" controlId="lastname">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            placeholder="Enter Last Name"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3 mt-1" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="Enter Email"
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3 mt-1" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text"
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                            placeholder="Enter username"
                                            required />
                                    </Form.Group>


                                    <Form.Group className="mb-4 mt-3" controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                            placeholder="Enter Address"
                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-4 mt-3" controlId="formMobileNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="number"
                                            value={mobileNumber}
                                            onChange={e => Number(setMobileNumber(e.target.value))}
                                            placeholder="Enter Mobile Number"
                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-4 mt-3" controlId="formDOB">
                                        <Form.Label>Date Of Birth</Form.Label>
                                        <Form.Control type="date"
                                            value={dob}
                                            onChange={e => setDOB(e.target.value)}
                                            placeholder="Enter DOB"
                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-4 mt-3" controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select value={role} onChange={e => setRole(e.target.value)} >
                                            {roles?.map(r => <option value={r.id} key={r.id}>{r.name}</option>)}
                                        </Form.Select>
                                    </Form.Group>


                                    <Form.Group className="mb-4 mt-3" controlId="gender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select value={gender} onChange={e => setGender(e.target.value)} >
                                            {GenderOptions?.map(g => <option value={g} key={g}>{g}</option>)}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-4 mt-3" controlId="blood-group">
                                        <Form.Label>Blood Group</Form.Label>
                                        <Form.Select value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
                                            {BloodGroupOptions.map(bldgrp => <option value={bldgrp} key={bldgrp}>{bldgrp}</option>)}
                                        </Form.Select>
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Update Account
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