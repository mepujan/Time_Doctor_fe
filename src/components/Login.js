import { useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';


export const Login = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

        const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const loginInfo = {
            "username":userName,
            "password":password
        }
        const response = await axios.post("/api/login",loginInfo);
        localStorage.setItem("userToken",response.data.token);
        localStorage.setItem("username",response.data.user.user_name);
        localStorage.setItem("profile_pic",response.data.user.profile_image);
        console.log(response.data.user);
        navigate("/");
        
    }catch(e){
        setErrMsg("Invalid Username or Password.")
    }
    }
    return ( 
    <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 mt-5'>
          {errMsg && (
            <Alert variant='danger'>
            {   errMsg}
            </Alert>
            )}  
            <h2 style={{textAlign:"center",fontSize:"bold"}}>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-1" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" 
                value = {userName}
                onChange = {e=>setUserName(e.target.value)}
                placeholder="Enter username" 
                required/>
                </Form.Group>
        
                <Form.Group className="mb-4 mt-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                    placeholder="Password" 
                    required />
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form>
            <p>
                Need an Account?<br />
                <span className="line">
                 {/*put router link here*/}
                <a href="/signup">Sign Up</a>
                </span>
            </p>
            </div>
            <div className='col-md-4'></div>
        </div>
      );
}