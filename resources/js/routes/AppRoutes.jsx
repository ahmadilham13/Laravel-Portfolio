import MainLayout from "../../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = [
    {
        name: "main",
        path: "/",
        Component: MainLayout,
        key: "main",
        routes: [
            {
                key: "home",
                name: "home",
                path: "/",
                index: true,
                requireAuth: false,
                Component: HomePage,
            },
            {
                key: "about",
                name: "about",
                path: "/about",
                Component: AboutPage,
            },
        ],
    },
    {
        name: "404",
        path: "*",
        Component: PageNotFound,
        key: "404",
    },
];

export default AppRoutes;