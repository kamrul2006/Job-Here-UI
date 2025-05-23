import { Link, useLoaderData } from "react-router-dom";
import FooterSec from "../Components/Fixed/FooterSec";
import NavbarSec from "../Components/Fixed/NavbarSec";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { Fade, Zoom } from "react-awesome-reveal";

const AllJobs = () => {
    const data = useLoaderData();

    return (
        <div className="w-full max-w-7xl mx-auto lg:pt-16">
            {/* <NavbarSec /> */}

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-10 px-4 md:px-10 text-center">
                <Zoom direction="left" delay={50}>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4">
                        Explore All Job Opportunities
                    </h1>
                </Zoom>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the latest job openings, filter by your preferred field, and apply with a single click.
                </p>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
                <Fade duration={1000} cascade damping={0.1}>
                    {data.map(job => (
                        <div
                            key={job._id}
                            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="p-5 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={job.company_logo} alt="Company" className="w-12 h-12 object-cover rounded-md" />
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-500 transition">
                                            {job.company}
                                        </h2>
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <IoLocationSharp className="text-blue-500" /> {job.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Job Title and Meta */}
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                                    <p className="flex items-center gap-1">
                                        <PiHandbagFill className="text-purple-500" /> {job.jobType}
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <IoTime className="text-green-500" /> Updated 5 min ago
                                    </p>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 line-clamp-3 mb-3 overflow-hidden h-14">
                                    {job.description}
                                </p>

                                {/* Requirements */}
                                <div className="text-sm bg-gray-50 rounded-lg p-3 mb-3 overflow-auto max-h-28 border border-gray-200">
                                    <p className="font-medium text-gray-700 mb-2">Requirements:</p>
                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                                        {job.requirements.map((req, idx) => (
                                            <li key={idx}>{req}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Deadline & Applications */}
                                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                                    <span className="text-red-500 font-semibold">Deadline: {job.applicationDeadline}</span>
                                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                        Applications: {job.applyCount || 0}
                                    </span>
                                </div>

                                {/* Footer - Salary & Buttons */}
                                <div className="flex justify-between items-center mt-auto pt-4 border-t">
                                    <p className="text-sm text-gray-800">
                                        <span className="text-info font-semibold">{job.salaryRange.min}</span> {job.salaryRange.currency}/month
                                    </p>
                                    <div className="flex gap-2">
                                        <Link to={`/allJob/details/${job._id}`}>
                                            <button className="btn btn-xs bg-blue-100 text-blue-600 hover:bg-blue-200">
                                                Details
                                            </button>
                                        </Link>
                                        <Link to={`/allJob/apply/${job._id}`}>
                                            <button className="btn btn-xs bg-green-100 text-green-600 hover:bg-green-200">
                                                Apply
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>


        </div>
    );
};

export default AllJobs;
