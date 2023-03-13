import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";
import { Doctor } from "../components/Doctor"

export const DoctorPage = () =>{
    return (
        <>
        <NavBar loginBtn={true}/>
        <Doctor/>
        <Footer/>
        </>
    )
}