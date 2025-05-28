import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobApply = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const data = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            name: form.fullName.value,
            email: form.email.value,
            phone: form.phone.value,
            position: form.position.value,
            coverLetter: form.coverLetter.value,
            resume: form.resume.value,
            linkedin: form.linkedin.value,
            image: form.img.value,
            job_id: data._id,
            jobInfo: {
                company: data.company,
                salaryRange: data.salaryRange,
                requirements: data.requirements,
                responsibilities: data.responsibilities,
                hr_email: data.hr_email,
                hr_name: data.hr_name,
                company_logo: data.company_logo,
            },
        };

        fetch("https://job-portal-server-one-alpha.vercel.app/apply", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((resData) => {
                if (resData.insertedId) {
                    Swal.fire({
                        title: "Application Sent!",
                        text: "You have successfully applied for this job.",
                        icon: "success",
                        confirmButtonText: "Great!",
                    });
                    form.reset();
                    navigate("/myApply");
                }
            });
    };

    return (
        <section className="bg-gray-50 py-12 lg:pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
                    Apply for {data.title}
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            defaultValue={user.displayName}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+8801XXXXXXXXX"
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            name="img"
                            placeholder="Paste image link"
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Position</label>
                        <input
                            type="text"
                            name="position"
                            defaultValue={data.title}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Resume (URL)</label>
                        <input
                            type="url"
                            name="resume"
                            placeholder="Paste resume link"
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                        <input
                            type="url"
                            name="linkedin"
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                        <textarea
                            name="coverLetter"
                            rows="5"
                            placeholder="Write your cover letter..."
                            className="textarea textarea-bordered w-full mt-1"
                            required
                        ></textarea>
                    </div>

                    <div className="col-span-1 md:col-span-2 text-center mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary px-10 text-white hover:scale-105 transition-transform"
                        >
                            🚀 Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default JobApply;
