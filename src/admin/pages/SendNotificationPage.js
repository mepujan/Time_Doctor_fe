import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";
import { SendNotification } from "../components/SendNotification"


export const SendNotificationPage = () =>{
    return(
        <>
            <NavBar loginBtn={true}/>
            <SendNotification/>
            <Footer/>
        </>

    )
}