import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path : '/',
        element: <Main/>,
        children: [
            {
                path : '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default router;