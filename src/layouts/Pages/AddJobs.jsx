import { Zoom } from "react-awesome-reveal";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddJobs = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const E = e.target
        const company = E.company.value
        const company_logo = E.companyLogo.value
        const title = E.title.value
        const location = E.location.value
        const jobType = E.jobType.value
        const category = E.category.value
        const applicationDeadline = E.applicationDeadline.value
        const description = E.description.value
        const hr_name = E.hr_name.value
        const hr_email = E.hr_email.value
        const requirements = E.requirements.value.split('\n')
        // const res = E.responsibilities.value
        const responsibilities = E.responsibilities.value.split('\n')

        // currency---
        const min = E.min.value
        const max = E.max.value
        const currency = E.currency.value


        const formData = {
            company,
            company_logo,
            title,
            location,
            jobType,
            category,
            applicationDeadline,
            description,
            hr_email,
            hr_name,
            salaryRange: {
                min, max, currency
            },
            requirements,
            status: "active",
            responsibilities,
            applyCount: 0
        }

        // console.log(formData);


        fetch('https://job-portal-server-one-alpha.vercel.app/allJobs', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'You added a job SuccessFully.',
                        icon: 'success',
                        confirmButtonText: "OK"
                    })
                    E.reset()
                    navigate('/postedJob')
                }

            })
    };


    return (
        <div>
            <div className="border">
                {/* ----------------header------------- */}
                <div className="bg-gray-300 py-3 px-2 md:px-10">
                    {/* --title--- */}
                    <Zoom direction="left" delay={50}>
                        <h1
                            className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                            Add a New Job
                        </h1>
                    </Zoom>

                    <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                    </p>
                </div>


                <div className="mx-5 md:mx-20 px-3 md:px-10 my-4 md:my-10 py-2 md:py-5 bg-base-200 rounded-md">

                    <h1 className="text-center text-2xl font-bold my-5 ">Add All The job Information</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* <form className="space-y-6"> */}

                        {/* company name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                                placeholder="Enter your company name"
                                required
                            />
                        </div>

                        {/* company_logo */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Company logo Link
                            </label>
                            <input
                                type="text"
                                id="company_logo"
                                name="companyLogo"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                                placeholder="Enter your company_logo link"
                                required
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Job  title
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="title"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                                placeholder="Enter your job title"
                                required
                            />
                        </div>

                        {/* location */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Company location
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="location"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Enter your company location"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* jobType */}
                            <div>
                                <label htmlFor="jt" className="block text-sm font-medium text-gray-700">
                                    Job Type
                                </label>
                                <select id="bxs" name="jobType" defaultValue={'Select Your Job Type.'} className="select select-bordered w-full">
                                    <option selected>Select Your Job Type</option>
                                    <option>Intern</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Remote</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>

                            {/* category */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Job category
                                </label>
                                <select id="axs" name="category" defaultValue={'Select Your Job category.'} className="select select-bordered w-full">
                                    <option selected>Select Your Job category</option>
                                    <option>Software Engineer</option>
                                    <option>Marketing Specialist</option>
                                    <option>Finance Manager</option>
                                    <option>Content Writer</option>
                                    <option>Teaching Assistant</option>
                                    <option>HyProject Manager</option>
                                    <option>Data Scientist</option>
                                    <option>UI/UX Designer</option>
                                    <option>DevOps Engineer</option>
                                    <option>Mobile App Developer</option>
                                    <option>Excel Master</option>
                                    <option>Back-End Developer</option>
                                </select>
                            </div>
                        </div>

                        {/* REQ */}
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700 ">Requirements </label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Write requirements of the job each in a new line"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/*respon */}
                        <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                                Responsibilities
                            </label>
                            <textarea
                                id="responsibilities"
                                name="responsibilities"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Write responsibilities of the job each in a new line"
                                rows="5"
                                required
                            ></textarea>
                        </div>


                        {/* application Deadline */}
                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                                Application Deadline
                            </label>
                            <input
                                type="date"
                                id="position"
                                name="applicationDeadline"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Enter the deadline"
                                required
                            />
                        </div>


                        {/*description */}
                        <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                                Job description
                            </label>
                            <textarea
                                id="coverLetter"
                                name="description"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Write a brief description of the job"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* salaryRange */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">

                            {/* min */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Minimum Salary
                                </label>
                                <input
                                    type="number"
                                    id="min"
                                    name="min"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                    placeholder="Enter your  Minimum Salary."
                                    required
                                />
                            </div>

                            {/* max */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Maximum Salary
                                </label>
                                <input
                                    type="number"
                                    id="max"
                                    name="max"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                    placeholder="Enter your Maximum Salary."
                                    required
                                />
                            </div>

                            {/* currency*/}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Salary currency
                                </label>
                                <input
                                    type="text"
                                    id="currency"
                                    name="currency"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                    placeholder="Enter your Salary currency."
                                    required
                                />
                            </div>

                        </div>

                        {/*hr_name*/}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                HR name
                            </label>
                            <input
                                type="text"
                                id="resume"
                                name="hr_name"
                                placeholder="Input hr_name"
                                defaultValue={user.displayName}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2"
                                required
                            />
                        </div>

                        {/* hr_email */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                HR Email
                            </label>
                            <input
                                type="email"
                                id="li"
                                name="hr_email"
                                placeholder="Input hr_email"
                                defaultValue={user.email}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Upload Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;
