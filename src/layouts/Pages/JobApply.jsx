import { useLoaderData, useNavigate } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobApply = () => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();

        const E = e.target
        const name = E.fullName.value
        const email = E.email.value
        const phone = E.phone.value
        const position = E.position.value
        const coverLetter = E.coverLetter.value
        const resume = E.resume.value
        const linkedin = E.linkedin.value
        const image = E.img.value
        // console.log(image);

        console.log(data._id)


        const formData = {
            name,
            email,
            phone,
            position,
            coverLetter,
            resume,
            linkedin,
            image,
            job_id: data._id,
            jobInfo: {
                company: data.company,
                salaryRange: data.salaryRange,
                requirements: data.requirements,
                responsibilities: data.responsibilities,
                hr_email: data.hr_email,
                hr_name: data.hr_name,
                company_logo: data.company_logo
            }
        }

        // console.log(formData);


        fetch('http://localhost:5000/apply', {
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
                        text: 'You Applied For the job SuccessFully.',
                        icon: 'success',
                        confirmButtonText: "OK"
                    })
                    e.target.reset()
                    navigate('/myApply')
                }

            })
    };

    return (
        <div>
            <NavbarSec />

            <div className="max-w-3xl mx-auto p-6 bg-gray-100 my-2 md:my-10 shadow-md rounded-lg">
                <h2 className="md:text-2xl text-xl text-center bg-base-300 py-2 rounded-full mt-5 font-bold mb-4 text-gray-800">Job Application Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            defaultValue={user.displayName}

                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}

                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                            placeholder="Enter your phone number (+88 0177777777)"
                            required
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="img"
                            name="img"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                            placeholder="Enter your Image link here."
                            required
                        />
                    </div>

                    {/* Position */}
                    <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                            Position Applying For
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            defaultValue={data.title}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                            placeholder="Enter the position"
                            required
                        />
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                            placeholder="Write a brief cover letter"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Upload Resume
                        </label>
                        <input
                            type="url"
                            id="resume"
                            name="resume"
                            placeholder="Input resume URL"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2"
                            required
                        />
                    </div>

                    {/* Linkedin Upload */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Linked In URL:
                        </label>
                        <input
                            type="url"
                            id="li"
                            name="linkedin"
                            placeholder="Input LinkedIn URL"
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
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default JobApply;