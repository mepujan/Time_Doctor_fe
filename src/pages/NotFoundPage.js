import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const PageNotFound = () =>{
    return(
        <>
            <NavBar/>
            <h2 className="display-2 text-center my-5 text-danger">Page Not Found...</h2>
            <p className="lead display-3 text-center">404 Error</p>
            <Footer/>
        </>
    )
}