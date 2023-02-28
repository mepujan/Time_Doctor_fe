import { SideBar } from "./SideBar";

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
                    <SideBar/>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        <div className="container">
                        <iframe title="calendar" style={style} src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%234285F4&ctz=America%2FToronto&showPrint=0&showCalendars=1&src=bWVwdWphbjEwQGdtYWlsLmNvbQ&color=%23039BE5"></iframe>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}