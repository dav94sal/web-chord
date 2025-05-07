import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, NavLink } from "react-router-dom";
import { getArtistById } from "../../redux/artist";
import { getAllTours } from "../../redux/tour";
import ManageTours from "../ManageTours";
import ManageMerch from "../ManageMerch";
import "./manage-page.css";

function ManagePage() {
    const [isLoading, setIsLoading] = useState(true);
    const artistId = useSelector(state => state.session.user.id);
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
        border = "border-right-red"
    }

    if (location.pathname.includes('manage-merch')) {
        render = <ManageMerch artistId={artistId} />
        border = "border-right-blue"
    }

    return (
        <div className="manage-layout">
            <ul
            className={`menu ${border}`}
            >
                <li>
                    <NavLink
                        to='/manage-tours'
                        className='nav-link black-text'
                    >
                        Tours
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/manage-merch'
                        className={isActive => {
                            console.log(isActive)
                            let classes = isActive.isActive ?
                                "active-blue" : "black-text"

                            return "nav-link " + classes
                        }}
                    >
                        Merch
                    </NavLink>
                </li>
            </ul>
            {!isLoading && render}
        </div>
    )
}

export default ManagePage;
