import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getArtistMerch } from "../../redux/merch";
import { useLoading } from "../../context/LoadingContext";
import MerchTile from "./MerchTile";
import "../Home/Home.css"
import "./merch.css"

function MerchPage() {
    const { isLoading, setIsLoading } = useLoading();
    const { artistId } = useParams();
    const merchObj = useSelector(state => state.merch);
    const merchandise = Object.values(merchObj);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtistMerch(artistId))
            .then(() => setIsLoading(false))
    }, [dispatch, artistId, setIsLoading])

    return (
        <div className="home-content-layout">
            {!isLoading && <div className="home-content-container">
                {merchandise.map((merch) => (
                    <div
                        key={`merch${merch.id}`}
                        onClick={() => alert("Feature Coming Soon")}    
                    >
                        <MerchTile
                            merch={merch}
                        />
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default MerchPage;