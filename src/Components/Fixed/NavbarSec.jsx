import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavbarSec = () => {
    const { user, UserSignOut } = useContext(AuthContext);

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-md transition-all duration-200 ${isActive ? "text-yellow-500 font-bold underline underline-offset-4" : "hover:text-yellow-500"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/allJob"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-md transition-all duration-200 ${isActive ? "text-yellow-500 font-bold underline underline-offset-4" : "hover:text-yellow-500"
                        }`
                    }
                >
                    All Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addJob"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-md transition-all duration-200 ${isActive ? "text-yellow-500 font-bold underline underline-offset-4" : "hover:text-yellow-500"
                        }`
                    }
                >
                    Add Job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/postedJob"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-md transition-all duration-200 ${isActive ? "text-yellow-500 font-bold underline underline-offset-4" : "hover:text-yellow-500"
                        }`
                    }
                >
                    My Job Post
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myApply"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-md transition-all duration-200 ${isActive ? "text-yellow-500 font-bold underline underline-offset-4" : "hover:text-yellow-500"
                        }`
                    }
                >
                    My Apply
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="fixed w-full z-50 bg-white/70 backdrop-blur-sm shadow-md">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-800 hover:text-yellow-500 transition">
                    <img src="https://cdn-icons-png.flaticon.com/512/535/535989.png" className="w-9" alt="Logo" />
                    <span>Job<span className="text-yellow-500">Here</span></span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-4">{navLinks}</ul>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {user ? (
                        <div className=" hidden md:flex items-center gap-3">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full ring-2 ring-yellow-500 hover:scale-110 transition-transform duration-200"
                            />
                            <button
                                onClick={UserSignOut}
                                className="px-3 py-1 text-sm font-medium border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex gap-2">
                            <Link
                                to="/login"
                                className="px-3 py-1 text-sm font-medium border border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded transition"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signUp"
                                className="px-3 py-1 text-sm font-medium border border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-white rounded transition"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Dropdown */}
                <div className="lg:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-base-100 rounded-box w-52 space-y-2"
                    >
                        {navLinks}
                        {!user && (
                            <div className="flex flex-col gap-2 mt-2">
                                <Link to="/login" className="btn btn-sm btn-success">Log In</Link>
                                <Link to="/signUp" className="btn btn-sm btn-warning">Sign Up</Link>
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavbarSec;
