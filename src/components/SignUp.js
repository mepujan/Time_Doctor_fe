import { useState } from "react"
import { Form,Button,Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import {useGetRoles} from '../hooks/useGetRoles';


const GenderOptions = ['male','female','others'];
const BloodGroupOptions = ['A+','A-','B+','B-','AB+','AB-','O+', 'O-'];

export const SignUp = () =>{
    const [firstName,setFirstName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [role,setRole] = useState('');
    const [dob,setDOB] = useState('');
    const [bloodGroup,setBloodGroup] = useState('');
    const [profileImage,setProfileImage] = useState('');
    const [errMsg,setErrMsg] = useState("");

    const roles = useGetRoles();
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            let formData = new FormData();
            formData.append('first_name',firstName);
            formData.append('last_name',lastName);
            formData.append('middle_name',middleName);
            formData.append('email',email);
            formData.append('user_name',userName);
            formData.append('address',address);
            formData.append('password',password);
            formData.append('mobile_number',mobileNumber);
            formData.append('dob',dob);
            formData.append('role_id',role);
            formData.append('gender',gender);
            formData.append('blood_group',bloodGroup);
            formData.append('profile_image',profileImage,profileImage.name);
            console.log(formData);
           
            await axios.post("/api/createUser",formData);
            navigate("/login");

        }catch(e){
            setErrMsg("Something Went Wrong. Try Again...")
        }
    }

    return(
        <>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 mt-5'> 
            {errMsg && (
            <Alert variant='danger'>
                {errMsg}
            </Alert>
            )}  
            <h2 style={{textAlign:"center",fontSize:"bold"}}>Create Account</h2>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Form.Group className="mb-3 mt-1" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                value = {firstName}
                onChange = {e=>setFirstName(e.target.value)}
                placeholder="Enter First Name" 
                required/>
            </Form.Group>

            <Form.Group className="mb-3 mt-1" controlId="middlename">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" 
                value = {middleName}
                onChange = {e=>setMiddleName(e.target.value)}
                placeholder="Enter Middle Name" 
                />
            </Form.Group>

            <Form.Group className="mb-3 mt-1" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" 
                value = {lastName}
                onChange = {e=>setLastName(e.target.value)}
                placeholder="Enter Last Name" 
                required
                />
            </Form.Group>

            <Form.Group className="mb-3 mt-1" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" 
                value = {email}
                onChange = {e=>setEmail(e.target.value)}
                placeholder="Enter Email" 
                />
            </Form.Group>


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
                    placeholder="Enter Password" 
                    required />
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" 
                    value = {address}
                    onChange = {e=>setAddress(e.target.value)}
                    placeholder="Enter Address" 
                    required />
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="formMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" 
                    value = {mobileNumber}
                    onChange = {e=>Number(setMobileNumber(e.target.value))}
                    placeholder="Enter Address" 
                    required />
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="formDOB">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" 
                    value = {dob}
                    onChange = {e=>setDOB(e.target.value)}
                    placeholder="Enter DOB"
                    required />
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="gender">
                <Form.Label>Role</Form.Label>      
                <Form.Select onChange ={e=>setRole(e.target.value)} >
                    {roles?roles.map(r => <option value = {r.id}key= {r.id}>{r.name}</option>):<option >Patient</option>}
                </Form.Select>
            </Form.Group>


            <Form.Group className="mb-4 mt-3" controlId="gender">
                <Form.Label>Gender</Form.Label>      
                <Form.Select onChange={e=>setGender(e.target.value)} >
                    {GenderOptions.map(g => <option value={g} key={g}>{g}</option>)}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4 mt-3" controlId="gender">
                <Form.Label>Blood Group</Form.Label>      
                <Form.Select  onChange = {e=>setBloodGroup(e.target.value)}>
                   {BloodGroupOptions.map(bldgrp =><option value = {bldgrp} key = {bldgrp}>{bldgrp}</option>)}
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-4 mt-3" controlId="formDOB">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" 
                    accept="image/*"
                    onChange = {e=>setProfileImage(e.target.files[0])}
                    required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Account
            </Button>
            </Form>
            <p>
                Already Have an Account?<br />
                <span className="line">
                 {/*put router link here*/}
                <a href="/login">Login</a>
                </span>
            </p>
            </div>
            <div className='col-md-4'></div>
        </div>
        </>
    )
}