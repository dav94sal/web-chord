import { useEffect, useState } from "react";
import MenuItem from "./tiles/MenuItem";
import { menuOptions } from "./options";
import useWindowDimensions from "../../context/useWindowDimensions";

function Menu({ type }) {
    const [items, setItems] = useState([]);
    const { isMobile } = useWindowDimensions();

    useEffect(() => {
        if (type === 'home') {
            setItems(Object.values(menuOptions.home));
        } else if (type === 'manageArtists') {
            setItems(Object.values(menuOptions.manageArtists));
        }
    }, [type]);

    return (
        <>
            <ul className={isMobile ? "profile-dropdown drop-position-left" : "menu"} >
                {items.map((item, i) => {
                    return (<MenuItem
                        icon={item.icon}
                        primaryText={item.primaryText}
                        destination={item.destination}
                        key={`${item.primaryText}${i}`}
                    />)
                })}
            </ul>
            {!isMobile && <div className="side-border"></div>}
        </>
    );
}

export default Menu;
