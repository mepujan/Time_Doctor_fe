
import { Footer } from "../../components/Footer";
import { NavBar } from "../components/AdminNavBar";
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