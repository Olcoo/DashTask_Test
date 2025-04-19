import { LoginForm } from "../../modules/Forms/LoginForm/LoginForm";

export const LoginPage = () => {
    return (
        <div className="absolute inset-0 z-50 bg-liteBlue flex items-center justify-center min-h-screen">
            <img className='absolute top-0 left-0' src="/icons/svg-bg-login-left-top.svg" />
            <img className='absolute top-0 right-0' src="/icons/svg-bg-login-right-top.svg" />
            <img className='absolute bottom-0 left-0' src="/icons/svg-bg-login-left-bottom.svg" />
            <img className='absolute bottom-0 right-0' src="/icons/svg-bg-login-right-bottom.svg" />
            <LoginForm/>
        </div>
    );
};