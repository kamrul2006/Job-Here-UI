import { createBrowserRouter, } from "react-router-dom";
import Root from "./layouts/Root";
import AllJobs from "./Components/AllJobs";
import HomeLayout from "./layouts/HomeLayout";
import Error from "./Components/Fixed/Error";
import LoginPage from "./Auth/Log/LoginPage";
import SignupPage from "./Auth/Log/SignupPage";
import PrivetRout from "./Auth/Privet/Privetrought";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
        ]
    },
    {
        path: '/allJob',
        element: <PrivetRout><AllJobs></AllJobs></PrivetRout>,
        errorElement: <Error />

    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <Error />
    },
    {
        path: '/signUp',
        element: <SignupPage />,
        errorElement: <Error />
    },
]);

export default router