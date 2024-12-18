function ShowTile({ show }) {

    const date = () => {
        const datetime = show.datetime.split(' ')
        const day = datetime[1]
        const month = datetime[2]
        const year = datetime[3]

        return `${month} ${day}, ${year}`
    }

    return (
        <>
            <div className="info">
                <p className="shows" >
                    {date()}
                </p>
                <p className="shows" >
                    {show.venue}
                </p>
                <p className="shows" >
                    {show.openers}
                </p>
            </div>
            <div className="location">
                <p className="shows" >
                    {`${show.city}, ${show.state}`}
                </p>
            </div>
            <div className="tickets">
                <button
                    className="show-button"
                    onClick={() => alert("Feature Coming Soon")}
                >
                    Tickets
                </button>
            </div>
        </>
    )
}

export default ShowTile;
