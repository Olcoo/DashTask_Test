import { FC, HTMLProps } from "react";

type CustomSearchInputProps = {
    placeholder: string,
} & HTMLProps<HTMLDivElement>;

export const CustomSearchInput: FC<CustomSearchInputProps> = ({ className, placeholder, onChange }) => {
    return(
        <div className={`${className} flex items-center`}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.3902 11.3896L15.5556 15.5555" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
            
            <input onChange={onChange} type="text" placeholder={placeholder} className="ml-2 w-full bg-transparent outline-none text-[#202224]/50 placeholder-[#202224]/50 text-sm font-nunito font-normal placeholder:font-nunito placeholder:font-normal placeholder:text-sm" />
        </div>
    );
};