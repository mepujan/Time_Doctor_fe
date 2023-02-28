export const Home = () => {
    const style = {
        border: 0,
        width: 1000,
        height: 650,
        frameBorder: 0,
        scrolling: "no"
    }
    return (
        <div style={{ textAlign: "center" }} className="mt-5">
            <div className="container">
                <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=e7b0d11ff9b2000c33a8bebd77111ab6e352f86b969708def5ecf03f45d7206a%40group.calendar.google.com&ctz=America%2FToronto" style={style}></iframe>
            </div>
        </div>
    )
}