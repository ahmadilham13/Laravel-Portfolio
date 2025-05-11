import { useNavigate } from "react-router-dom";

const listNavbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white shadow sticky w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold text-gray-800">
                        <p>Ahmad Ilham</p>
                    </div>

                    {/* Menu */}
                    <div className="flex gap-2 space-x-4">
                        {listNavbar.map((item, index) => (
                            <p 
                                key={index}
                                className="text-gray-700 hover:text-blue-600 transition"
                                onClick={() => navigate(item.path)}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;