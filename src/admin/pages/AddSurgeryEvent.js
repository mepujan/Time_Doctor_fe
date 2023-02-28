import { SurgeryForm } from "../components/SurgeryForm"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"

export const AddSurgeryEventPage = () =>{
    return (
        <>
            <NavBar loginBtn={true}/>
            <SurgeryForm />
            <Footer/>
        </>
    )
}