function Error () {
    return (
        <div className="home-main-content">
            <div className="err-container">
                <p>Uh-oh! Something went wrong... Try a refresh?</p>
                {/* {import.meta.env.MODE !== 'production' ?
                    '' : ''} */}
            </div>
        </div>
    )
}

export default Error;
