import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";
import { DashComponent } from "../components/DashComponent"

export const DashBoard = () =>{
    return(
        <>
        <NavBar loginBtn={true}/>
        <DashComponent/>
        <Footer/>
        </>
    )
}