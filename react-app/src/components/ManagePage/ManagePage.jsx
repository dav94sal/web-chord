import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistById } from "../../redux/artist";
import { useLoading } from "../../context/LoadingContext";
import "./manage-page.css"

function ManagePage() {
    // isLoading context necessary for navigation header
    const { isLoading, setIsLoading } = useLoading()
    const artistId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArtistById(artistId))
            .then(() => setIsLoading(false))
    })
    return (
        <div className="manage-layout">
            {!isLoading && <p>Manage Page</p>}
        </div>
    )
}

export default ManagePage;
