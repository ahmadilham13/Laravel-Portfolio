import Logo from "../../atoms/Logo";
import NavLink from "../../atoms/NavLink";

const Footer = () => {

    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 sm:flex justify-between'>
                <NavLink href="/" className="text-2xl md:text-3xl text-white font-semibold">
                    <Logo />
                </NavLink>
                <p className='text-[#9AAEBB]'>All rights reserved ® ahmadilham 2023.</p>
            </div>
        </footer>
    )
}

export default Footer;