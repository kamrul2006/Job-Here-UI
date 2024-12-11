import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className="text-center text-5xl text-red-500 font-black font-serif">404</h1>

            <Link to={'/'} className="btn btn-outline">Go back home</Link>
        </div>
    );
};

export default Error;