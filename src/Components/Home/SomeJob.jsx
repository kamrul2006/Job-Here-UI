import { useEffect, useState } from "react";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Zoom, Fade } from "react-awesome-reveal";

const SomeJob = () => {
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-one-alpha.vercel.app/allJobs')
            .then(res => res.json())
            .then(data => setJobsData(data));
    }, []);

    const jobs = jobsData.slice(Math.max(jobsData.length - 4, 0));

    return (
        <section className="py-10 md:py-20 px-4 md:px-12 bg-gradient-to-br from-yellow-50 to-white">
            {/* Header */}
            <div className="text-center mb-12">
                <Zoom triggerOnce>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 drop-shadow-sm">
                        Best Jobs of The Day
                    </h2>
                </Zoom>
                <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
                    Find top opportunities curated for you. Apply now and take the next step in your career.
                </p>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Fade duration={1000} cascade damping={0.2}>
                    {jobs.map(job => (
                        <div key={job._id} className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-2xl p-5 shadow-lg transition hover:shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <img src={job.company_logo} alt={job.company} className="w-12 h-12 object-contain rounded-full border p-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-yellow-700">{job.company}</h3>
                                    <p className="flex items-center gap-1 text-gray-500 text-sm">
                                        <IoLocationSharp /> {job.location}
                                    </p>
                                </div>
                            </div>

                            {/* Title & Type */}
                            <h4 className="font-semibold text-xl text-gray-800 mb-1">{job.title}</h4>
                            <div className="text-gray-500 text-sm mb-2 flex items-center gap-3">
                                <span className="flex items-center gap-1"><PiHandbagFill /> {job.jobType}</span>
                                <span className="flex items-center gap-1"><IoTime /> 5 min ago</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-3 h-[60px] overflow-hidden">
                                {job.description}
                            </p>

                            {/* Requirements */}
                            <div className="bg-yellow-50 rounded-lg p-3 text-xs text-gray-700 space-y-1 mb-3 h-[90px] overflow-y-auto">
                                {job.requirements.map((req, idx) => (
                                    <p key={idx}>• {req}</p>
                                ))}
                            </div>

                            {/* Deadline */}
                            <p className="text-sm text-red-500 font-medium mb-2">
                                Deadline: {job.applicationDeadline}
                            </p>

                            {/* Salary + Apply */}
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-gray-600 text-sm">
                                    <span className="font-bold text-yellow-700">{job.salaryRange.min}</span> {job.salaryRange.currency}/month
                                </p>
                                <Link to={`/allJob/apply/${job._id}`}>
                                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-4 py-2 rounded-full transition">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>

            {/* See All Jobs CTA */}
            <div className="mt-12 text-center">
                <Link to="/allJob">
                    <button className="bg-white border border-yellow-500 text-yellow-600 hover:bg-yellow-600 hover:text-white px-6 py-2 rounded-full transition text-sm font-medium">
                        See All Jobs
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default SomeJob;
