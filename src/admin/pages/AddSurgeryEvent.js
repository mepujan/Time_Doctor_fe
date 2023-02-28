
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { SurgeryForm } from "../components/SurgeryForm";

export const AddSurgeryEventPage = () =>{
    return (
        <>
            <NavBar loginBtn={true}/>
            <SurgeryForm/>
            <Footer/>
        </>
    )
}