// import { useLoaderData } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Zoom } from "react-awesome-reveal";
import app from "../../assets/allpi.jpg"
import useAxiosSecure from "../../hooks/useAxiocSec";

const MyApplyes = () => {
    const { user } = useContext(AuthContext)
    const axiosSec = useAxiosSecure()

    const [data, setData] = useState([])
    useEffect(() => {

        // axios.get(`https://job-portal-server-one-alpha.vercel.app/apply?email=${user.email}`, { withCredentials: true })
        //     .then(res => setData(res.data))

        axiosSec.get(`/apply?email=${user.email}`)
            .then(res => setData(res.data))


    }, [])

    // console.log(user.email)

    return (
        <div>


            {/* ----------------header------------- */}
            <div className="bg-gray-300 py-3 px-2 md:px-10">
                {/* --title--- */}
                <Zoom direction="left" delay={50}>
                    <h1
                        className="text-center mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                        All applies are done by you .
                    </h1>
                </Zoom>

                <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde ea itaque similique nam.
                </p>
            </div>


            {/* showing all applies */}
            <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:my-10">
                {data.map(apply =>
                    <div key={apply._id}
                        className=" border rounded-xl p-2">

                        <div className="md:flex gap-2 md:gap-5  items-center bg-amber-200 p-2 rounded-t-lg ">
                            {/* -------img---------- */}
                            <div className="h-[120px] w-[120px]">
                                {/* <img src={app } className="w-full h-full object-cover rounded-full" /> */}
                                <img src={apply.image != "" ? apply.image : { app }} className="w-full h-full object-cover rounded-full" />
                            </div>

                            {/*--------- ApplyInfo----------- */}
                            <div className="text-sm">
                                <p className="text-center font-bold text-xl font-serif  border-b-2 border-black mb-2">Applicant Information</p>
                                <p><span className=" font-bold">Applied By:</span> <br /> {apply.name} </p>
                                <p><span className=" font-bold">Email :</span> <br /> {apply.email}</p>
                                <p className="bg-white px-2 rounded"><span className=" font-bold">Application Status :</span> {apply.status ? apply.status : "Pending"}</p>
                            </div>
                        </div>

                        <hr />
                        <hr />

                        {/*--------- JobInfo----------- */}
                        <div className="md:flex gap-2 md:gap-5 items-center bg-sky-200 p-2 rounded-b-lg  ">
                            <div className="w-20 h-20">
                                <img src={apply.jobInfo.company_logo ? apply.jobInfo.company_logo : { app }} className="w-full h-full mx-auto  object-cover rounded-full" />
                            </div>
                            <div>
                                <p className="text-center font-bold text-xl font-serif  border-b-2 border-black mb-2">Job Info </p>
                                <p><span className=" font-bold">On Company:</span>  {apply.jobInfo.company}</p>
                                <p><span className=" font-bold">At the position: </span> {apply.position}</p>
                                <p><span className=" font-bold">Under:</span>  {apply.jobInfo.hr_name}</p>
                                {/* 
                            <p>{apply.jobInfo}</p> */}
                            </div>
                        </div>
                    </div>)}

            </div>
        </div>
    );
};

export default MyApplyes;