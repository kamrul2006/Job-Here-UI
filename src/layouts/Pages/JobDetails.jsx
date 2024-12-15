import { Slide, Zoom } from "react-awesome-reveal";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";

const JobDetails = () => {
    const data = useLoaderData()
    // console.log(data)

    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = data

    return (
        <div>

            <NavbarSec />

            <div className="mb-5 md:mb-20">

                {/* ----------------header------------- */}
                <div className="bg-gray-300 py-3 px-2 md:px-10">
                    {/* --title--- */}
                    <Zoom direction="left" delay={50}>
                        <h1
                            className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                            Job details of {title}
                        </h1>
                    </Zoom>

                    <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                    </p>
                </div>



                <div className="mx-2 md:mx-10 my-6 md:my-10 ">
                    <Slide direction="right" duration={2000}>
                        <div className="bg-base shadow-xl px-2 md:px-20 border mx-5 md:mx-20 py-1 rounded-xl">

                            {/* ---------image and title---- */}
                            <div className="flex items-center gap-3 my-2">
                                {/* -iamge- */}
                                <div>
                                    <img src={company_logo} alt="logo" className="w-20" />
                                </div>

                                {/* -text- */}
                                <div>
                                    <h1 className="text-3xl font-bold hover:text-blue-500">{company}</h1>
                                    <p className="flex items-center gap-1 text-gray-400 "><IoLocationSharp /> {location}</p>
                                </div>
                            </div>
                            <hr />

                            {/* -----title and time update------ */}
                            <div className="mt-5">
                                <h1 className="font-bold">{title}</h1>

                                {/* type and time */}
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <p className="flex items-center gap-1"><PiHandbagFill /> {jobType}</p>
                                    <p className="flex items-center gap-1"><IoTime /> updated 5 min. ago.</p>
                                </div>
                            </div>

                            {/* ----------description---------- */}
                            <p className=" my-5 text-sm">
                                {description}
                            </p>

                            {/* -other info--- */}
                            <div className="md:flex gap-20">
                                <div className="text-sm text-gray-500">
                                    <p>Application Deadline : {applicationDeadline}</p>
                                    <p>Category: {category}</p>
                                    <p>HR email :{hr_email}</p>
                                    <p>HR name: {hr_name}</p>
                                    <p className="text-green-500 italic">status: {status}</p>
                                </div>

                                <div className="text-sm text-gray-500">
                                    <p className="font-bold">Responsibilities:</p>
                                    <ul>
                                        {responsibilities.map((res,i)=><li key={i}>✔ {res}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* ------------requirements------ */}
                            <div className=" bg-white py-1 px-2 rounded-md text-xs">
                                {requirements.map((req, i) => <p key={i} className="my-2">◾ {req}</p>)}
                            </div>

                            {/* ---------salary and apply btn */}
                            <div className="flex items-center justify-between my-5">
                                <h1 className="text-gray-500">Salary: <span className="text-xl md:text-3xl italic font-light text-info">{salaryRange.min}-{salaryRange.max}</span> {salaryRange.currency}/month </h1>

                                <div className="flex gap-2">
                            <Link to={`/allJob`}>
                                <button className="btn btn-sm md:btn-md btn-outline">{"<<<   Go Back"}</button>
                            </Link>
                            <Link to={`/allJob/apply/${data._id}`}>
                            <button className="btn btn-sm md:btn-md btn-outline btn-success">Apply Now</button>
                            </Link>                        </div>

                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;