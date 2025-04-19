import { HTMLProps, useRef, useState } from "react";
import { CustomDropdown } from "..";
import { useOnClickOutside } from "../../hooks";

export const LanguageDropdown = ({ className }: HTMLProps<HTMLDivElement>) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLElement | null>(null);
    
    useOnClickOutside(dropdownRef, () => {
        if(isActive) setIsActive(false);
    })

    const handleClick = () => setIsActive(prev => !prev);

    return(
        <section ref={dropdownRef} className={`${className} relative`}>
            <div onClick={handleClick} className={`cursor-pointer flex items-center`}>
                <img className="w-[30] h-[20px] sm:w-[40px] sm:h-[27px] rounded-md" src="/images/UK-flag.png" alt="country flag" />

                <h3 className="font-nunito lg:block hidden ml-4 font-semibold text-sm mr-[0.688rem] text-[#646464]">English</h3>

                <svg className={`${isActive && 'rotate-180'} lg:inline-block hidden transition-transform duration-300 w-2 h-2 text-gray-800 dark:text-[#646464]`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
            </div>

            <CustomDropdown isActive={isActive} className="mt-[0.875rem] min-w-64 h-56 right-0 lg:min-w-52 lg:left-1/2 lg:-translate-x-1/2">
                <h3 className="text-customGray">Some content</h3>
            </CustomDropdown>
        </section>
    );
};