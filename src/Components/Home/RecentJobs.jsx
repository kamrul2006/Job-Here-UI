import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const RecentJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://job-portal-server-one-alpha.vercel.app/allJobs")
            .then((res) => res.json())
            .then((data) => {
                const recent = data.slice(-6).reverse();
                setJobs(recent);
            });
    }, []);

    return (
        <section className="bg-base-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-10">
                    🔥 Recent Job Openings
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job._id} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={job.company_logo} alt="Logo" className="w-10 h-10 object-contain" />
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-blue-600">{job.company}</h3>
                                    <p className="text-gray-500 text-sm flex items-center gap-1">
                                        <IoLocationSharp /> {job.location}
                                    </p>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold mb-2">{job.title}</h4>

                            <div className="text-sm text-gray-500 flex items-center justify-between mb-3">
                                <p className="flex items-center gap-1"><PiHandbagFill /> {job.jobType}</p>
                                <p className="flex items-center gap-1"><FaRegClock /> Updated recently</p>
                            </div>

                            <p className="text-sm text-gray-600 h-[60px] overflow-hidden">{job.description}</p>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-green-600 font-semibold">
                                    ${job.salaryRange.min} {job.salaryRange.currency}/mo
                                </span>
                                <Link to={`/allJob/apply/${job._id}`}>
                                    <button className="btn btn-xs md:btn-sm btn-outline btn-primary">Apply</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/allJob" className="block mt-10">
                    <button className="btn btn-outline btn-accent rounded-full px-8">
                        View All Jobs
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default RecentJobs;
