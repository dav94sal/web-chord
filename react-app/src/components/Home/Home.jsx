import { useDispatch } from "react-redux"
import { getAllArtists } from "../../redux/artist";
import ArtistTile from "./ArtistTile";
import "./Home.css"
import { useEffect, useState } from "react";

// For Testing
const arrayMaker = (num=10) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
            .then(() => setIsLoading(false))
    }, [dispatch])

    return (
        <div className="home-content-layout">
            {!isLoading && <div className="home-content-container">
                {arrayMaker().map((num) => (
                    <ArtistTile key={num}/>
                ))}
            </div>}
        </div>
    )
}

export default Home;
