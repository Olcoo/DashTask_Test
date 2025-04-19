import { HTMLProps, PropsWithChildren } from "react";

export const PageTitle = ({ children, className }: PropsWithChildren & HTMLProps<HTMLHeadingElement>) => {
    return(
        <h2 className={`${className} font-nunito font-bold text-[2rem] text-customBlack`}>{children}</h2>
    );
};