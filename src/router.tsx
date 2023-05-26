import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Template from "./pages/template/Template.tsx";
import Home from "./pages/administration/home.tsx";
import View from "./pages/View/View.tsx";

export const routerConfig = [
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <Navigate to="/view" replace={true} />,
            },
            {
                path: "/view",
                element: <View />,
                loader: () => ({data:"test"})
            },
            {
                path: "/admin",
                element: <Home />,
                loader: () => ({data:"test"})
            }
        ]
    },
]
export const router = createBrowserRouter(routerConfig)

const R = () => {
    return <RouterProvider router={router} />;
}

export default R;
