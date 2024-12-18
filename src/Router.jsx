import { createBrowserRouter, } from "react-router-dom";
import Root from "./layouts/Root";
import AllJobs from "./layouts/AllJobs";
import HomeLayout from "./layouts/HomeLayout";
import Error from "./Components/Fixed/Error";
import LoginPage from "./Auth/Log/LoginPage";
import SignupPage from "./Auth/Log/SignupPage";
import PrivetRout from "./Auth/Privet/Privetrought";
import JobDetails from "./layouts/Pages/JobDetails";
import JobApply from "./layouts/Pages/JobApply";
import MyApplyes from "./layouts/Pages/MyApplyes";
import AddJobs from "./layouts/Pages/AddJobs";
import MyPostedJobs from "./layouts/Pages/MyPostedJobs";
import WhoApplied from "./layouts/Pages/WhoApplied";



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
            {
                path: '/allJob/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`),
                element: <PrivetRout><JobDetails /></PrivetRout>,
            },
            {
                path: '/allJob/apply/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params.id}`),
                element: <PrivetRout><JobApply /></PrivetRout>,
            },
            {
                path: '/myApply',
                loader: () => fetch(`http://localhost:5000/apply`),
                element: <PrivetRout><MyApplyes /></PrivetRout>,
            },
            {
                path: '/addJob',
                loader: () => fetch(`http://localhost:5000/allJobs`),
                element: <PrivetRout><AddJobs /></PrivetRout>,
            },
            {
                path: '/postedJob',
                loader: () => fetch(`http://localhost:5000/allJobs`),
                element: <PrivetRout><MyPostedJobs /></PrivetRout>,
            },
            {
                path: `/whoApplied/:id`,
                loader: ({params}) => fetch(`http://localhost:5000/apply/applicant/${params.id}`),
                element: <PrivetRout><WhoApplied /></PrivetRout>,
            },
        ]
    },
    {
        path: '/allJob',
        loader: () => fetch('http://localhost:5000/allJobs'),
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