import NavLink from "../NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((item, index) => {
                <li key={index}>
                    <NavLink href={item.path}>{item.title}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default MenuOverlay;