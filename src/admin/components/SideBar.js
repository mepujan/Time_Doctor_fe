import { Nav } from "react-bootstrap";
import { FcAlarmClock, FcCalendar, FcManager, FcPortraitMode, FcList, FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import {AiOutlineSchedule} from 'react-icons/ai';


export const SideBar = () => {
    return (
        <>
            <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/admin/dashboard" className="nav-link" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcList className="me-2" />
                                DashBoard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/patient" className="nav-link" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcBusinessman className="me-2" />
                                Patients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/doctor" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcManager className="me-2" />
                                Doctors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/admin/add-user' style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcPortraitMode className="me-2" />
                                Add Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/send-notification" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcAlarmClock className="me-2" />
                                Send Notification
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/schedule-surgery" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <FcCalendar className="me-2" />
                                Schedule Surgery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/events" style={({ isActive }) => ({
                                backgroundColor: isActive ? "#3B71CA" : "white",
                                fontWeight: 500,
                                color: "#333"
                            })}>
                                <AiOutlineSchedule className="me-2" />
                                Events
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    )
}