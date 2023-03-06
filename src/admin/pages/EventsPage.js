
import { Events } from "../components/Events"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"

export const EventsPage = () =>{
    return(
        <>
        <NavBar loginBtn={true}/>
        <Events/>
        <Footer/>
        </>

    )
}