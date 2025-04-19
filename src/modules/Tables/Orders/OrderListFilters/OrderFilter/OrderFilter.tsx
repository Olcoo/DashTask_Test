import { HTMLProps, PropsWithChildren } from "react";

export const OrderFilter = ({ children, className }: PropsWithChildren & HTMLProps<HTMLDivElement>) => {
    return (
        <div className={`${className} h-full flex justify-center items-center text-nowrap px-6 border-r border-customGray hover:bg-customDarkGray/10`}>
            {children}
        </div>
    )
};