import { Outlet } from "react-router-dom";
import Navbar from "../../commons/molecules/Navbar";
import Footer from "../../commons/molecules/Footer";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            {/* Start:: Navbar */}
            <Navbar />
            {/* End:: Navbar */}
            <Outlet />
            {/* Start:: Footer */}
            <Footer />
            {/* End:: Footer */}
        </main>
    )
}

export default Home;