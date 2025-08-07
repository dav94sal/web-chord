function Menu() {
  const { width } = useWindowDimensions();
  const user = useSelector((store) => store.session.user);
  const isMobile = width < 768;

  return (
    <div className="home-sidebar">
        <ul className="menu">
            {sidebarMenus.map((item, i) => {
                return (<MenuItem
                    icon={item.icon}
                    primaryText={item.primaryText}
                    destination={item.destination}
                    key={`${item.primaryText}${i}`}
                />)
            })}
        </ul>
        <div className="side-border"></div>
    </div>
  );
}
