import { CustomBtn } from "../../components";
import { useAuth } from "../../hooks";

export const LogoutPage = () => {
    const { logout } = useAuth();

    return (
        <>
            <CustomBtn onClick={logout}>Click to logout</CustomBtn>
        </>
    );
};