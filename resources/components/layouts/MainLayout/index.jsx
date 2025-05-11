import { Outlet } from "react-router-dom";
import Navbar from "../../commons/molecules/Navbar";

const MainLayout = () => {
    return (
        <main className="relative mx-auto box-border flex flex-col min-h-screen w-full max-w-[1444px] overflow-x-hidden p-4 items-start justify-start">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainLayout;