import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getArtistMerch } from "../../redux/merch";

function MerchPage() {
    const { artistId } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtistMerch(artistId))
    })

    return (
        <>
            <p>Merch Page</p>
        </>
    )
}

export default MerchPage;
