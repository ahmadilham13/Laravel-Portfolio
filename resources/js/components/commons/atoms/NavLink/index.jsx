import { useNavigate } from "react-router-dom";

const NavLink = ({ href, children, className='' }) => {
    const navigate = useNavigate();

    return (
        <p 
            onClick={() => navigate(href)}
            className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded cursor-pointer md:p-0 hover:text-white ${className}`}
        >
            {children}
        </p>
    )
}

export default NavLink;