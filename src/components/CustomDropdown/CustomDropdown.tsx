import { FC, HTMLProps, PropsWithChildren } from "react";

type CustomDropdownProps = {
    isActive: boolean,
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

export const CustomDropdown: FC<CustomDropdownProps> = ({ className, children, isActive }) => {

    return(
        <div className={`${className} ${!isActive && 'invisible pointer-events-none opacity-0' } bg-white top-full rounded-[14px] transition-all duration-300 absolute shadow-custom`}>
            {children}
        </div>
    );
};