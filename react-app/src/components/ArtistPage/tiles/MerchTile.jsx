function MerchTile({ merch }) {
    return (
        <div className="artist-tile-container">
            <div className="artist-tile">
                <img
                    src={merch.imgUrl}
                    className="artist-img"
                />
            <div className="price-name">
                <p>{merch.name}</p>
                <p>.</p>
                <p>{merch.price}</p>
            </div>
            </div>
        </div>
    )
}

export default MerchTile;
