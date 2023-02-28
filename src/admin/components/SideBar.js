import { Nav } from "react-bootstrap";

export const SideBar = () => {
    return (
        <>
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
                                    <a className="nav-link" href = '/admin/add-user'>
                                        <span data-feather="users"></span>
                                        Add Users
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href = "/admin/send-notification">
                                        <span data-feather="users"></span>
                                            Send Notification
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href = "/admin/send-notification">
                                        <span data-feather="users"></span>
                                            Add Surgery Schedule
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Nav>
        </>
    )
}