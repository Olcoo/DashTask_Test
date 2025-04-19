import { HTMLProps, useRef, useState } from "react";
import { CustomDropdown } from "..";
import { useOnClickOutside } from "../../hooks";

export const NotifyBell = ({ className }: HTMLProps<HTMLDivElement>) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLElement | null>(null);

    useOnClickOutside(dropdownRef, () => {
        if(isActive) setIsActive(false);
    })

    const handleClick = () => setIsActive(prev => !prev);

    return(
        <section ref={dropdownRef} className={`${className} relative`}>
            <div onClick={handleClick} className={`cursor-pointer`}>
                <svg className="w-full h-full" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z" fill="#4880FF"/>
                    <rect opacity="0.3" x="9" y="19.5" width="6" height="6" rx="2.25" fill="#FF0000"/>
                </svg>

                <div className="min-w-[14px] min-h-[14px] sm:min-w-[18px] sm:min-h-[18px] bg-pink rounded-full flex items-center justify-center 
                    border border-pink select-none
                    text-white text-[8px] sm:text-xs font-bold font-nunito
                    absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 transform"
                >
                    6
                </div>
            </div>

            <CustomDropdown isActive={isActive} className="min-w-64 mt-2 h-[333px] right-0 lg:min-w-52 lg:left-1/2 lg:-translate-x-1/2">
                <h3 className="text-customGray">Some content</h3>
            </CustomDropdown>
        </section>

    );
};