import "../Home.css"

function ArtistTile({ artist }) {
    return (
        <div className="artist-tile-container">
            <div className="artist-tile">
                <img
                    src={artist.imgUrl}
                    className="artist-img"
                />
            </div>
            <p className="name-artist">{artist.artistName}</p>

        </div>
    )
}

export default ArtistTile;
