import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"
import { SendNotification } from "../components/SendNotification"


export const SendNotificationPage = () =>{
    return(
        <>
            <NavBar />
            <SendNotification/>
            <Footer/>
        </>

    )
}