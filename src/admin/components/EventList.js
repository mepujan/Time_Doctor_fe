
export const EventList = ({datas}) => {
    console.log(datas);
    return (
        <div>
            <h6>Scheduled Data</h6>
            
            {datas.map((data) => (
                <div>
                    <p>{data.attendees[1].email}</p>
                    <p>{data.start.dateTime}</p>
                    <p>{data.end.dateTime}</p>
                </div>
            ) )}
           
        </div>
    )
} 