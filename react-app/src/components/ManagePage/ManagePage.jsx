import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getArtistById } from "../../redux/artist";
import { getAllTours } from "../../redux/tour";
import { useLoading } from "../../context/LoadingContext";
import ManageTours from "./ManageTours";
import ManageMerch from "./ManageMerch";
import "./manage-page.css";

function ManagePage() {
    // isLoading context necessary for navigation header
    const { isLoading, setIsLoading } = useLoading();
    const artistId = useSelector(state => state.session.user.id);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getArtistById(artistId))
            .then(() => dispatch(getAllTours()))
            .then(() => setIsLoading(false))
    })

    let render

    if (location.pathname.includes('manage-tours')) {
        render = <ManageTours />
    }

    if (location.pathname.includes('manage-merch')) {
        render = <ManageMerch />
    }

    return (
        <div className="manage-layout">
            <ul className="manage-menu">
                <li onClick={() => navigate('/manage-tours')}>
                    Tours
                </li>
                <li onClick={() => navigate('/manage-merch')}>
                    Merch
                </li>
            </ul>
            {!isLoading && render}
        </div>
    )
}

export default ManagePage;
