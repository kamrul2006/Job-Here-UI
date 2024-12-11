import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavbarSec = () => {

    const list = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allJob'}>All Jobs</NavLink></li>
    </>

    const { user, UserSignOut } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <div className="navbar px-5 bg-white/10 backdrop-blur-sm shadow-md py-2 md:py-4 md:px-20 sticky top-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>

                    {/* ---------------------------logo----------------------- */}
                    <div className="flex items-center gap-3 md:gap-5">
                        <img src="https://cdn-icons-png.flaticon.com/512/535/535989.png" className="w-10 md:w-15" />
                        <Link to={'/'} className=" text-xl md:text-4xl font-bold hover:text-yellow-600">Job-Here</Link>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex items-center gap-2">
                            <img src={user.photoURL} className="w-10 md:w-14 rounded-full" />
                            <button className="btn btn-xs btn-outline" onClick={UserSignOut}>Sign Out </button>
                        </div> :
                        <div className="flex items-center gap-3">
                            <Link to={'/login'} className="btn btn-sm btn-outline btn-success">Log In</Link>
                            <Link to={'/signUp'} className="btn btn-sm btn-outline btn-warning">Sing Up</Link>
                        </div>}

                </div>
            </div>
        </div>
    );
};

export default NavbarSec;