// import { AiFillHome } from "react-icons/ai";
import { FaWpexplorer } from "react-icons/fa6";
// import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi";
import { FaShop } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";

const homeSidebarMenu = {
    1: { icon: FaWpexplorer, primaryText: 'Explore', destination: '/explore'},
    2: { icon: HiChartBar, primaryText: 'Feed', destination: '/feed'},
    // 3: { icon: HiChartBar, primaryText: 'Popular', destination: '/popular'},
    // 4: { icon: BsArrowUpRightCircle, primaryText: 'New', destination: '/newest-posts'},
    // 5: { icon: HiChartBar, primaryText: 'All', destination: '/all-posts'},
};

const sidebarMenus = {
    1: { icon: FaBus, primaryText: 'Tours', destination: '/manage-tours'},
    2: { icon: FaShop, primaryText: 'Merch', destination: '/manage-merch'},
    // 3: { icon: FaWpexplorer, primaryText: 'Explore', destination: '/explore'},
    // 4: { icon: HiChartBar, primaryText: 'All', destination: '/all-posts'},
}

export const menuOptions = {
    home: homeSidebarMenu,
    manageArtists: sidebarMenus,
}
