import { HTMLProps, useRef, useState } from "react";
import { CustomDropdown, UserAvatar } from "..";
import { useOnClickOutside } from "../../hooks";

export const UserDropdown = ({ className }: HTMLProps<HTMLDivElement>) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLElement | null>(null);
    

    const handleClick = () => setIsActive(prev => !prev);

    useOnClickOutside(dropdownRef, () => {
        if(isActive) setIsActive(false);
    })

    return (
        <section ref={dropdownRef} className={`${className} relative`}>
            <div onClick={handleClick} className={`flex items-center cursor-pointer`}>
                
                <UserAvatar className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" src="/images/test-user-img.png"/>
                
                <section className="lg:flex hidden flex-col ml-5 justify-center mr-[1.625rem] select-none">
                    <h2 className="font-nunito font-bold text-sm text-[#404040] mb-[3px]">Moni Roy</h2>
                    <h3 className="font-nunito font-semibold text-xs text-[#565656]">Admin</h3>
                </section>

                <div className={`w-[18px] h-[18px] rounded-full lg:flex hidden items-center justify-center border-[#5C5C5C] border-[0.2px] transition-transform duration-300 ${isActive && 'rotate-180'}`}>
                    <svg className="w-2 h-2 text-gray-800 dark:text-[#646464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                    </svg>
                </div>

            </div>
            <CustomDropdown isActive={isActive} className="mt-[0.375rem] h-44 min-w-52 right-0 lg:min-w-52 lg:left-1/2 lg:-translate-x-1/2">
                <h3 className="text-customGray">Some content</h3>
            </CustomDropdown>
        </section>
    );
};