import { Link, useLoaderData } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";


const MyPostedJobs = () => {
    const { user } = useContext(AuthContext)

    const data = useLoaderData()
    const myData = data.filter(d => d.hr_email == user.email)
    // console.log(myData)

    return (
        <div>

            {/* ----------------header------------- */}
            <div className="bg-gray-300 py-3 px-2 md:px-10">
                {/* --title--- */}
                <Zoom direction="left" delay={50}>
                    <h1
                        className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                        Job You Posted
                    </h1>
                </Zoom>

                <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                </p>
            </div>


            {/* ---------------all jobs------------------ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-10 my-6 md:my-10 ">
                <Fade duration={2000}>
                    {myData.map(job => <div key={job._id}
                        className="bg-base-300 px-4 py-1 rounded-xl">

                        {/* ---------image and title---- */}
                        <div className="flex items-center gap-3 my-2">
                            {/* -iamge- */}
                            <div>
                                <img src={job.company_logo} alt="logo" className="w-10" />
                            </div>

                            {/* -text- */}
                            <div>
                                <h1 className="text-xl font-bold hover:text-blue-600">{job.company}</h1>
                                <p className="flex items-center gap-1 text-gray-400 text-sm"><IoLocationSharp /> {job.location}</p>
                            </div>
                        </div>

                        {/* -----title and time update------ */}
                        <div className="mt-5">
                            <h1 className="font-bold">{job.title}</h1>

                            {/* type and time */}
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <p className="flex items-center gap-1"><PiHandbagFill /> {job.jobType}</p>
                                <p className="flex items-center gap-1"><IoTime /> updated 5 min. ago.</p>
                            </div>
                        </div>

                        {/* ----------description---------- */}
                        <p className="h-[65px] mt-5 text-sm">
                            {job.description}
                        </p>

                        {/* ----------deadline---------- */}
                        <p className=" my-1 text-sm text-red-500">
                            Dead Line:  {job.applicationDeadline}
                        </p>

                        <div className="flex items-center justify-between">
                            {/* ----------total apply---------- */}
                            <p className=" text-sm text-blue-500">
                                Application yet:  {job.applyCount ? job.applyCount : 0}
                            </p>
                            <Link to={`/whoApplied/${job._id}`}>
                                <button className="btn btn-link">View who applied</button>
                            </Link>

                        </div>

                        {/* ------------requirements------ */}
                        <div className=" bg-white py-1 px-2 rounded-md text-xs">
                            {job.requirements.map((req, i) => <p key={i} className="my-2">◾ {req}</p>)}
                        </div>

                        {/* ---------salary and apply btn */}
                        <div className="flex items-center justify-between my-5">
                            <h1 className="text-gray-500"><span className="text-xl italic font-light text-info">{job.salaryRange.min}</span> {job.salaryRange.currency}/month </h1>


                            <div className="flex gap-2">
                                <Link to={`/allJob/details/${job._id}`}>
                                    <button className="btn btn-xs btn-outline btn-info">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                </Fade>
            </div>        </div>
    );
};

export default MyPostedJobs;