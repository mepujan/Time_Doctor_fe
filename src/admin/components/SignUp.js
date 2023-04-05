import { Form, Button, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useResources } from '../../hooks/useResource';
import { useState } from "react";
import { SideBar } from "./SideBar";


const GenderOptions = ['male', 'female', 'others'];
const BloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState(GenderOptions[0]);
    const [role, setRole] = useState();
    const [dob, setDOB] = useState('');
    const [bloodGroup, setBloodGroup] = useState(BloodGroupOptions[0]);
    const [profileImage, setProfileImage] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const roles = useResources("/api/roles");
    // const navigate = useNavigate();
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
            formData.append('password', password);
            formData.append('mobile_number', mobileNumber);
            formData.append('dob', dob);
            formData.append('role_id', role);
            formData.append('gender', gender);
            formData.append('blood_group', bloodGroup);
            formData.append('profile_image', profileImage, profileImage.name);

            await axios.post("/api/createUser", formData);
            setSuccessMsg("User Created Successfully");
            setFirstName("");
            setLastName("");
            setMiddleName("");
            setMobileNumber("");
            setEmail("");
            setAddress("")
            setDOB("");
            setProfileImage("");
            setTimeout(function () {
                setSuccessMsg("");
            }, 3000);

        } catch (e) {
            setErrMsg("Something Went Wrong. Try Again...")
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Create New Account</h1>
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

                                    <Form.Group className="mb-4 mt-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder="Enter Password"
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
                                            placeholder="Enter Address"
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

                                    <Form.Group className="mb-4 mt-3" controlId="profilepic">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control type="file"
                                            accept="image/*"
                                            onChange={e => setProfileImage(e.target.files[0])}
                                            required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Create Account
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