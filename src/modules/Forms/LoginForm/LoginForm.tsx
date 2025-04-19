import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { CustomBtn, PageTitle } from '../../../components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormData, loginZodSchema } from '../../../validation/loginZodSchema';
import { useAuth } from '../../../hooks';
import { fakeLogin } from '../../../api';


export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginZodSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      setServerError(null);

      const response = await fakeLogin(data.email, data.password);

      login(response.token, data.remember || false)
      navigate('/');
      
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong');
    }
  };

  return (
      <div className="bg-white w-[630px] px-[57px] py-[96px] rounded-2xl shadow-md border border-gray-300 relative z-10">
        <PageTitle className='flex justify-center mb-4'>Login to Account</PageTitle>
        <p className="font-nunito font-semibold text-lg text-center text-customBlack/80 mb-9">Please enter your email and password to continue</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-10'>
            <label className="block mb-[0.938rem] font-nunito font-semibold text-lg text-customBlack/80">Email address:</label>
            <input {...register('email')} type="text" placeholder="Enter your email address" className="w-full px-4 py-3 border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-lg bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
          </div>

          <div className='mb-6'>
            <div className="mb-[0.938rem] flex justify-between items-center">
                <label className="font-nunito font-semibold text-lg text-customBlack/80">Password</label>
                <Link to={'/'} className="font-nunito font-semibold text-lg text-customBlack/60">Forget Password?</Link>
            </div>
            <input {...register('password')} type="password" placeholder="Enter your password" className="w-full px-4 py-3 border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-lg bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
          </div>

          <label className="flex items-center space-x-3 mb-14">
            <input id='remember' type="checkbox" {...register('remember')} className="w-6 h-6 hidden peer" />
            <label htmlFor='remember' className='w-6 h-6 rounded-md border items-center justify-center hidden peer-checked:flex cursor-pointer border-customDarkGray'>
                <svg className="w-6 h-6 text-gray-800 dark:text-customCheckGray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                </svg>
            </label>
            <label htmlFor='remember' className='w-6 h-6 rounded-md border flex items-center justify-center peer-checked:hidden cursor-pointer border-customDarkGray'></label>
            <p className="font-nunito font-semibold text-lg text-customBlack/60">Remember Password</p>
          </label>

          <div className="px-[50px]">
            <CustomBtn className="w-full bg-liteBlue/90 hover:bg-liteBlue transition-colors duration-300 rounded-lg text-xl flex justify-center">Sign In</CustomBtn>
          </div>
        </form>

        <div className="mt-[1.125rem] flex space-x-[0.375rem] justify-center">
            <p className='font-nunito font-semibold text-lg text-customBlack/65'>
                Don’t have an account?{' '}
            </p>
          <Link to={'/register'} state={{ from : location.pathname}} className="font-nunito font-bold text-lg text-customLinkBlue hover:underline">
            Create Account
          </Link>
        </div>

        {serverError && <p className="text-sm text-red-600">{serverError}</p>}
      </div>
  );
};