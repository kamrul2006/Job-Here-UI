/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.info(location)

    if (loading) {
        return <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative w-24 h-24">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent animate-spin"></div>

                    {/* Inner Circle */}
                    <div className="absolute inset-3 rounded-full border-4 border-t-green-300 border-r-transparent border-b-green-300 border-l-transparent animate-spin-slow"></div>

                    {/* Center Dot */}
                    <div className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};


export default PrivetRout;