export const Home = () => {
    const style = {
        border: 0,
        width: 1000,
        height: 650,
        frameBorder: 0,
        scrolling: "no",
    }
    return (
        <div style={{ textAlign: "center" }} className="mt-5">
            <div className="container">
            <iframe title="calendar" style={style} src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%234285F4&ctz=America%2FToronto&showPrint=0&showCalendars=1&src=bWVwdWphbjEwQGdtYWlsLmNvbQ&color=%23039BE5"></iframe>
            </div>
        </div>
    )
}