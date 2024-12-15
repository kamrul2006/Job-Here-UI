import { useLoaderData } from "react-router-dom";
import NavbarSec from "../../Components/Fixed/NavbarSec";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyApplyes = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const myJobsApply = data.filter(data => data.email == user.email);

    const [applies, setApplies] = useState(myJobsApply)

    return (
        <div>
            <NavbarSec></NavbarSec>
            asdf {applies.length}
        </div>
    );
};

export default MyApplyes;