import ArtistTile from "./ArtistTile";
import "./Home.css"

// For Testing
const arrayMaker = (num=10) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}

function Home() {
    return (
        <div className="home-content-layout">
            <div className="home-content-container">
                {arrayMaker().map((num) => (
                    <ArtistTile key={num}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
