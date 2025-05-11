import { useNavigate } from "react-router-dom";
import SearchInput from "../../atoms/SearchInput";
import BoxProfile from "../../atoms/BoxProfile";
import { useState } from "react";

const listNavbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="absolute top-4 z-50 mt-2 h-12 w-(--my-width-nav) flex items-center justify-between bg-transparent px-4">
                {/* Left Section */}
                <section className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-6 rounded-full bg-(--bg-primary-cray)">
                        <p className="font-barlow ml-3 text-sm font-semibold text-(--text-color-black)">Menu</p>
                        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100" onClick={() => setIsOpen(!isOpen)}>
                            <i className="fa-solid fa-bars text-(--text-color-black)"></i>
                        </button>
                    </div>
                </section>

                {/* Right Section */}
                <section className="flex items-center justify-between gap-2 max-md:hidden">
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e)}
                        onSearch={() => console.log(search)}
                    />
                    <BoxProfile 
                        name={`Ahmad Ilham`}
                        onClick={() => console.log("Profile")}
                        picture={`/images/profile.jpg`}
                    />
                </section>
            </header>

            <>
                <div className={`fixed top-0 left-0 mx-auto flex h-[100vh] w-full items-center justify-between bg-black/50 px-4 ${
                    isOpen ? "z-50 overflow-hidden opacity-100" : "-z-1 opacity-0"}`}
                    onClick={() => setIsOpen(!isOpen)}
                />

                <aside
                    className={`${isOpen ? "z-50 -translate-x-0" : "-z-1 translate-x-100"} fixed top-0 right-0 h-[100vh] w-64 bg-(--bg-secondary-cray) transition-transform duration-300 2xl:absolute 2xl:h-full`}
                >
                    <div className="flex h-full flex-col items-center justify-center">
                        <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <i className="fa-solid fa-xmark text-(--text-color-black)"></i>
                        </button>
                        {listNavbar.map((item, index) => (
                            <p
                                key={index}
                                className="w-full cursor-pointer px-4 py-2 text-lg font-semibold text-(--text-color-black) opacity-80 transition duration-300 ease-in-out hover:bg-(--bg-primar-cray) hover:opacity-100 text-center"
                                onClick={() => navigate(item.path)}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </aside>
            </>
        </>
    )
}

export default Navbar;