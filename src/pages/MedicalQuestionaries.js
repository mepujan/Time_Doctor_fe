import { useResources } from "../hooks/useResource";
import { Table, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { QuestionForm } from "../components/QuestionForm";
import axios from "../api/axios";
import { useToken } from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

export const MedicalQuestionaries = () => {

    const [inputFields, setInputFields] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const newChange = {
            'questionId':e.target.dataset.question,
            'answer':e.target.value
        }
        setInputFields([...inputFields,newChange]);
    }

    const token = useToken('userToken');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            
            const data = inputFields;
           await axios.post("/api/saveAnswer",data, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
           });
           navigate("/medical-questionaries/submitted");
           
        }catch(e){
            console.log(e);
        }
    }
    const heartQuestions = useResources("api/questions/1");
    const breatheQuestions = useResources("api/questions/3");
    const neuroQuestions = useResources("api/questions/4");
    const otherQuestions = useResources("api/questions/5");
    return (
        <>
            <NavBar />

            <div className='container mt-3'>
                <div className="text-center mb-5">
                    <h2 className="mb-2">Medical Questionaries</h2>
                    <span>Please Submit these details to confirm your schedule</span>

                </div>
                <h3>Heart</h3>
                <Table striped bordered hover size="sm">
                    <tbody>
                        <QuestionForm questions={heartQuestions} setData={handleChange}/>
                    </tbody>
                </Table>


                <h3>Breathing</h3>
                <Table striped bordered hover size="sm">
                    <tbody>
                    <QuestionForm questions={breatheQuestions} setData = {handleChange}/>
                    </tbody>
                </Table>

                <h3>Neurological</h3>
                <Table striped bordered hover size="sm">
                    <tbody>
                    <QuestionForm questions={neuroQuestions} setData={handleChange}/>
                    </tbody>
                </Table>

                <h3>Others</h3>
                <Table striped bordered hover size="sm" className="mb-3">
                    <tbody>
                    <QuestionForm questions={otherQuestions} setData={handleChange}/>

                    </tbody>
                </Table>
                <div className="container mb-3" style={{ backgroundColor: "#D2DC9C" }}>
                    <p>Our Notice of Privacy Practices provides information about how we may use and disclose protected health information about you. You have the right to review our Notice before signing this Consent. You have the right to request that we restrict how protected health information about you is used or disclosed for treatment, payment or health care operations. We are not required to agree to this restriction, but if we do, we shall honor that agreement.
                        By signing this form, you consent to our use and disclosure of protected health information about you for treatment, payment and health care operations. You have the right to revoke this Consent, in writing, signed by you. However, such a revocation shall not affect any disclosures we have already made in reliance on you prior Consent.</p>
                    <br /> The Patient understands that <br /><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            Protected health information may be disclosed or used for treatment, payment or health care operations.
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            All other disclosures by the practice will require specific authorization by you unless required by law.
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label">
                            The Practice has a Notice of Privacy Practices and that the patient can review this Notice and receive a copy.
                        </label>
                    </div>

                </div>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit Questionaries
                </Button>

            </div>
            <Footer />
        </>
    )
}

