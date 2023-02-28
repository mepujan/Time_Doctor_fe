import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';


export const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const token = useToken("userToken");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password === confirmPassword) {
                const body = {"password":password};
                await axios.put("/api/updatePassword",body,{headers:{
                    'Authorization':`Bearer ${token}`
                }});
                localStorage.clear();
                navigate("/login");
            }
            setErrMsg("Password Doesnot Match. Try Again");

        } catch (e) {
            setErrMsg("Cannot Change Password. Try Again...")
        }
    }
    return (
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 mt-5'>
                {errMsg && (
                    <Alert variant='danger'>
                        {errMsg}
                    </Alert>
                )}
                <h2 style={{ textAlign: "center", fontSize: "bold" }}>Change Password</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-1" controlId="username">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter New Password"
                            required />
                    </Form.Group>

                    <Form.Group className="mb-4 mt-3" controlId="formBasicPassword">
                        <Form.Label>Retype New Password</Form.Label>
                        <Form.Control type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Re-type Password"
                            required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Change Password
                    </Button>
                </Form>
            </div>
            <div className='col-md-4'></div>
        </div>
    );
}