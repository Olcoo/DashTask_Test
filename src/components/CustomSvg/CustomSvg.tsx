import { FC, HTMLProps } from "react";

type CustomSvgProps = {
    activeColor?: string | null,
    color: string,
    path: string,
    viewBox: string,
    xmlns: string,
} & HTMLProps<HTMLOrSVGElement>;

export const CustomSvg: FC<CustomSvgProps> = ({ activeColor, color, className, path, viewBox, xmlns, onClick }) => {
    return(
        <svg
        onClick={onClick}
        viewBox={viewBox}
        xmlns={xmlns} 
        className={`${className} ${activeColor ? `${activeColor}` : `${color}`} fill-current`}>
            <path d={`${path}`} />
        </svg>
    );
};