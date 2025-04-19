import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormData, contactZodSchema } from "../../../validation/contactZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContact } from "../../../store/thunks";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CustomBtn, UserAvatar } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../hooks";


export const AddContactForm = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { createtatus } = useAppSelector(state => state.contacts);
    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState<string>('');
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<ContactFormData>({ resolver: zodResolver(contactZodSchema) });

    const to = location.state?.from?.pathname;

    const onSubmit: SubmitHandler<ContactFormData> = data => {

        const newData = {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
        };
        dispatch(createContact(newData));

        
        switch(createtatus) {
            case 'loading':
                return toast('Request is sending!', {
                    type: "info",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });

            case 'succeeded':
                navigate(to);
                return toast('Request success!', {
                    type: "success",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });

            case 'failed':
                return toast('Request error!', {
                    type: "error",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });
        };
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            setValue('image', file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };


    return(
        <div className="w-full px-[1rem] xs:px-[2rem] md:px-[2rem] xl:px-[11.25rem] py-[1rem] md:py-[3.75rem] bg-white rounded-[14px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="flex flex-col items-center mb-10">
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <UserAvatar className="w-20 h-20 mb-2" src={previewImage}/>
                            <span className="text-customBlue text-sm font-nunito font-semibold">Upload Photo</span>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem] lg:gap-[3.75rem]">                    
                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">First Name</label>
                            <input {...register('firstName')} type="text" placeholder="Enter first name" className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName?.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">Last Name</label>
                            <input {...register('lastName')} type="text" placeholder="Enter last name" className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName?.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">Your email</label>
                            <input {...register('email')} type="email" placeholder="Enter email" className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">Phone Number</label>
                            <input {...register('phone')} type="tel" placeholder="Enter phone number" className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone?.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">Date of Birth</label>
                            <input {...register('birthDate')} type="date" className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent" />
                            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate?.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 md:mb-3 text-sm font-semibold font-nunito text-customGray">Gender</label>
                            <select {...register('gender')} className="w-full px-2 md:px-4 pt-[0.500rem] md:pt-[0.938rem] pb-[0.3rem] md:pb-[0.75rem] border text-customLiteGray font-nunito font-semibold text-lg border-customGray rounded-[4px] bg-customGray focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent">
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm">{errors.gender?.message}</p>}
                        </div>

                        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                            <CustomBtn className="text-lg rounded-xl w-[17.125rem] flex justify-center">Add Now</CustomBtn>
                        </div>
                    </div>
                </form>
            </div>
    );
};