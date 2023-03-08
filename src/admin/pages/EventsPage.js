
import { Events } from "../components/Event"
import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";

export const EventsPage = () =>{
    return(
        <>
        <NavBar loginBtn={true}/>
        <Events/>
        <Footer/>
        </>

    )
}