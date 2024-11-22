import { useDispatch, useSelector } from "react-redux"
import { getAllArtists } from "../../redux/artist";
import ArtistTile from "./ArtistTile";
import "./Home.css"
import { useEffect, useState } from "react";

// For Testing
// const arrayMaker = (num=10) => {
//     let arr = []
//     for (let i = 0; i < num; i++) {
//         arr.push(i)
//     }
//     return arr
// }

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const artistsObj = useSelector(state => state.artists)
    const artists = Object.values(artistsObj)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
            .then(() => setIsLoading(false))
    }, [dispatch])

    return (
        <div className="home-content-layout">
            {!isLoading && <div className="home-content-container">
                {artists.map((artist) => (
                    <ArtistTile
                        key={`artists${artist.id}`}
                        artist={artist}
                    />
                ))}
            </div>}
        </div>
    )
}

export default Home;
