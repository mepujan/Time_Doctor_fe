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
                            <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=e7b0d11ff9b2000c33a8bebd77111ab6e352f86b969708def5ecf03f45d7206a%40group.calendar.google.com&ctz=America%2FToronto" style={style}></iframe>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}