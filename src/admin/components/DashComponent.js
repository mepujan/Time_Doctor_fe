import { Nav } from "react-bootstrap"

export const DashComponent = () => {
    const style = {
        border: 0,
        width: 1000,
        height: 650,
        frameBorder: 0,
        scrolling: "no"
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                     <Nav.Link href="/admin/dashboard">
                                     <span data-feather="home"></span>
                                        DashBoard
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                     <Nav.Link href="/admin/patient">
                                        Patients
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                     <Nav.Link href="/admin/doctor">
                                        Doctors
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href>
                                        <span data-feather="users"></span>
                                        Add Users
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href>
                                        <span data-feather="users"></span>
                                        Add Schedule
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        <div className="container">
                            <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=e7b0d11ff9b2000c33a8bebd77111ab6e352f86b969708def5ecf03f45d7206a%40group.calendar.google.com&ctz=America%2FToronto" style={style}></iframe>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}