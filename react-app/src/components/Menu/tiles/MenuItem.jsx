import { NavLink } from "react-router-dom";

function MenuItem({ icon: Icon, primaryText, secondaryText, destination }) {
    return (
        <>
            <NavLink to={destination}>
                <li className="drop-menu-item">
                    <div className="menu-icon-container">
                        <Icon className="menu-icon"/>
                    </div>
                    <div className="menu-text">
                        <p>{primaryText}</p>
                        <p>{secondaryText || null}</p>
                    </div>
                </li>
            </NavLink>
        </>
    )
}

export default MenuItem;
