import "./Home.css"

function ArtistTile() {
    return (
        <div className="artist-tile-container">
            <div className="artist-tile">
                <img
                    src="https://i.ibb.co/sv3NyY3/board-2450236-1280.jpg"
                    className="artist-img"
                />
            </div>
            <p className="name-artist">Artist Name</p>

        </div>
    )
}

export default ArtistTile;
