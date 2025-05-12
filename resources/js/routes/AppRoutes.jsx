import Home from "../components/layouts/Home";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = [
    {
        name: "main",
        path: "/",
        Component: Home,
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