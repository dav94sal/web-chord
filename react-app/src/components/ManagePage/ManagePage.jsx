import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { getArtistById } from "../../redux/artist";
import { getAllTours } from "../../redux/tour";
import ManageTours from "./ManageTours";
import ManageMerch from "./ManageMerch";
import MenuItem from "../Home/tiles/MenuItem";
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
        border = "background-red"
    }

    if (location.pathname.includes('manage-merch')) {
        render = <ManageMerch artistId={artistId} />
        border = "background-blue"
    }

    const sidebarMenus = [
        { icon: FaBus, primaryText: 'Tours', destination: '/manage-tours'},
        { icon: FaShop, primaryText: 'Merch', destination: '/manage-merch'},
        // { icon: FaWpexplorer, primaryText: 'Explore', destination: '/explore'},
        // { icon: HiChartBar, primaryText: 'All', destination: '/all-posts'},
    ]

    return (
        <div className="manage-layout">
            <ul className='menu'>

                {sidebarMenus.map((item, i) => {
                    return (<MenuItem
                        icon={item.icon}
                        primaryText={item.primaryText}
                        destination={item.destination}
                        key={`${item.primaryText}${i}`}
                    />)
                })}
            </ul>
            <div className={`side-border ${border}`}></div>
            {!isLoading && render}
        </div>
    )
}

export default ManagePage;
