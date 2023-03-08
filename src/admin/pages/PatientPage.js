import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";
import { Patient } from "../components/Patient"

export const PatientPage = () =>{
    return (
        <>
        <NavBar loginBtn={true}/>
        <Patient/>
        <Footer/>
        </>
    )
}