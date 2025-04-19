import { Link, useLocation } from "react-router-dom";

export const RegisterPage = () => {
    const location = useLocation();
    
    return (
        <>
            <Link to={location?.state?.from} className="font-nunito font-bold text-lg text-customLinkBlue hover:underline">
                Login
            </Link>
        </>
    );
};