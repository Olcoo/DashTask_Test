import { HTMLProps, PropsWithChildren } from "react";

export const CustomBtn = ({ className, children, onClick }: HTMLProps<HTMLButtonElement> & PropsWithChildren) => {
    return(
        <button onClick={onClick} className={`${className} bg-liteBlue rounded-md flex font-nunito font-bold text-sm px-4 py-[0.875rem] text-white`}>
            {children}
        </button>
    );
};