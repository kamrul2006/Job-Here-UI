import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SomeJob = () => {

    const [Work, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(dt => setData(dt))
    }, [])

    const jobs = Work.slice(Math.max(Work.length - 4, 0))
    // console.log(Work)

    return (
        <div className="my-5 md:my-20 border">

            {/* ----------------header------------- */}
            <div className="bg-gray-300 py-3 px-2 md:px-10">
                {/* --title--- */}
                <Zoom direction="left" delay={50}>
                    <h1
                        className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                        Best Jobs of The Day
                    </h1>
                </Zoom>

                <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2 md:mx-10 my-6 md:my-10 ">
                <Fade duration={2000}>
                    {jobs.map(job => <div key={job._id}
                        className="bg-base border px-4 py-1 rounded-xl">

                        {/* ---------image and title---- */}
                        <div className="flex items-center gap-3 my-2">
                            {/* -iamge- */}
                            <div>
                                <img src={job.company_logo} alt="logo" className="w-10" />
                            </div>

                            {/* -text- */}
                            <div>
                                <h1 className="text-xl font-bold hover:text-blue-500">{job.company}</h1>
                                <p className="flex items-center gap-1 text-gray-400 text-sm"><IoLocationSharp /> {job.location}</p>
                            </div>
                        </div>
                        <hr />

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
                        <p className="h-[70px] mt-5 text-sm">
                            {job.description}
                        </p>

                        {/* ------------requirements------ */}
                        <div className=" bg-white py-1 px-2 rounded-md text-xs">
                            {job.requirements.map((req, i) => <p key={i} className="my-2">◾ {req}</p>)}
                        </div>

                        {/* ---------salary and apply btn */}
                        <div className="flex items-center justify-between my-5">
                            <h1 className="text-gray-500"><span className="text-xl italic font-light text-info">{job.salaryRange.min}</span> {job.salaryRange.currency}/month </h1>

                            <Link to={`/allJob/apply/${job._id}`}>
                            <button className="btn btn-xs btn-outline btn-success">Apply Now</button>
                            </Link>

                        </div>
                    </div>)}
                </Fade>
            </div>

            <div className="mx-auto flex items-center bg-base-300 py-5">
                <Link to={`/allJob`} className="mx-auto">
                    <button className="btn btn-xs md:btn-md rounded-full mx-auto btn-outline text-lg">See all Jobs</button>
                </Link>
            </div>

        </div>
    );
};

export default SomeJob;