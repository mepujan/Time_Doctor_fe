
import { Events } from "../components/Event"
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