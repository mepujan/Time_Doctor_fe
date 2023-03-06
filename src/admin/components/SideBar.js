import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FcAlarmClock,FcCalendar,FcManager,FcPortraitMode,FcList,FcBusinessman } from "react-icons/fc";

export const SideBar = () => {
    const style = {
            fontWeight: 500,
            color: "#333",
    };
    return (
        <>
           <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Nav.Link href="/admin/dashboard" style={style}>
                                        <FcList className="me-2"/>
                                            DashBoard
                                        </Nav.Link>
                                    </li>
                                <li className="nav-item">
                                     <Nav.Link href="/admin/patient" style={style}>
                                        <FcBusinessman className = "me-2" />
                                        Patients
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                     <Nav.Link href="/admin/doctor" style={style}>
                                        <FcManager className = "me-2"/>
                                        Doctors
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href = '/admin/add-user' style={style}>
                                    <FcPortraitMode className="me-2"/>
                                        Add Users
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href = "/admin/send-notification" style={style}>
                                        <FcAlarmClock className = "me-2"/>
                                            Send Notification
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href = "/admin/schedule-surgery" style={style}>
                                        <FcCalendar className="me-2"/>
                                        Schedule Surgery 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Nav>
        </>
    )
}