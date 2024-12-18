import { useLoaderData } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const WhoApplied = () => {
    const data = useLoaderData()
    // console.log(data)
    const handleReview = (e, id) => {
        const status = e.target.value
        // console.log(status, id)
        const data = { status }

        fetch(`http://localhost:5000/apply/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'Status updated SuccessFully.',
                        icon: 'success',
                        confirmButtonText: "OK"
                    })
                }

            })


    }

    return (
        <div>
            <NavbarSec />

            {/* ----------------header------------- */}
            <div className="bg-gray-300 py-3 px-2 md:px-10">
                {/* --title--- */}
                <Zoom direction="left" delay={50}>
                    <h1
                        className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                        See who applied
                    </h1>
                </Zoom>

                <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                </p>
            </div>

            <div className="overflow-x-auto mx-5 md:mx-10 shadow-md my-4 md:my-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>View Info</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((D, i) => <tr key={D._id}>
                            <td>{i + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={D.image}
                                                alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </td>


                            <td>
                                {D.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{D.email}</span>
                            </td>
                            <th>
                                <button className="btn btn-link btn-xs">details</button>
                            </th>
                            <td>
                                <select
                                    onChange={(e) => handleReview(e, D._id)}
                                    defaultValue={D.status ? D.status : "Select Status"}
                                    className="select select-xs w-fit max-w-xs">
                                    <option disabled>Select Status</option>
                                    <option>Under review</option>
                                    <option>Set Interview</option>
                                    <option>Selected</option>
                                    <option>Rejected</option>
                                </select>
                            </td>
                        </tr>

                        )}

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default WhoApplied;