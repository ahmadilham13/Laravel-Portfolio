import Logo from "../../atoms/Logo";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "../../atoms/NavLink";
import MenuOverlay from "../../atoms/MenuOverlay";

const navlinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navbarHandler = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className="fixed top-0 md:pt-2 md:px-3 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <NavLink href="/" className="text-2xl md:text-3xl text-white font-semibold">
                    <Logo />
                </NavLink>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button 
                                onClick={() => navbarHandler()} 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                id='showNavbar'
                                aria-label='Show Navbar'
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => navbarHandler()}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                                id='hideNavbar'
                                aria-label='Hide Navbar'
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                        {
                            navlinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink href={item.path}>{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            { navbarOpen ? <MenuOverlay links={navlinks} /> : null }
        </nav>
    )
}

export default Navbar;