import { Footer } from "../../components/Footer"
import { NavBar } from "../components/AdminNavBar";
import { SignUp } from "../components/SignUp"

export const SignUpPage = () =>{
    return(
        <>
            <NavBar loginBtn={true}/>
            <SignUp/>
            <Footer/>
        </>
    )
}