import { Footer } from "../components/Footer"
import { Home } from "../components/Home"
import { NavBar } from "../components/NavBar"

export const HomePage = () =>{
    return (
        <>
        <NavBar loginBtn={true}/>
        <Home />
        <Footer />
        </>
    )
}