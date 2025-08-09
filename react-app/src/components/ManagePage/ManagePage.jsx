import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArtistById } from "../../redux/artist";
import { getAllTours } from "../../redux/tour";
import ManageTours from "./ManageTours";
import ManageMerch from "./ManageMerch";
import Menu from "../Menu/Menu";
import useWindowDimensions from "../../context/useWindowDimensions";
import "./manage-page.css";

function ManagePage() {
    const [isLoading, setIsLoading] = useState(true);
    const { isMobile } = useWindowDimensions()
    const artistId = useSelector(state => state.session.user.artist_id);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtistById(artistId))
            .then(() => dispatch(getAllTours()))
            .then(() => setIsLoading(false))
    })

    let render;
    let border;

    if (location.pathname.includes('manage-tours')) {
        render = <ManageTours isLoading={isLoading}/>
        border = "background-red"
    }

    if (location.pathname.includes('manage-merch')) {
        render = <ManageMerch artistId={artistId} />
        border = "background-blue"
    }

    return (
        <div className="manage-layout">
            {isMobile ? null :
                <div className="sidebar-menu">
                    <Menu type="manageArtists" border={border}/>
                </div>
            }
            {!isLoading && render}
        </div>
    )
}

export default ManagePage;
