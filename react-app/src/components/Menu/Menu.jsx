import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import MenuItem from "./tiles/MenuItem";
import { menuOptions } from "./options";
import useWindowDimensions from "../../context/useWindowDimensions";

function Menu({ type, border=null }) {
    const [items, setItems] = useState([]);
    const { isMobile } = useWindowDimensions();

    useEffect(() => {
        if (type === 'home') {
            setItems(Object.values(menuOptions.home));
        } else if (type === 'manageArtists') {
            if (isMobile) {
                const newType = {...menuOptions.manageArtists}
                newType[0] = {
                    icon: AiFillHome,
                    primaryText: 'Home',
                    destination: '/explore'
                }
                menuOptions.manageArtists = newType;
            } else {
                delete menuOptions.manageArtists[0]; // Remove the home item for desktop view
            }
            setItems(Object.values(menuOptions.manageArtists));
        }
    }, [type, isMobile]);

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
            {!isMobile && <div className={`side-border ${border}`}></div>}
        </>
    );
}

export default Menu;
