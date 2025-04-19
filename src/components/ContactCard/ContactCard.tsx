import { FC, HTMLProps } from "react";
import { MessageBtn } from "..";

type ContactCardProps = {
    contactImgSrc: string,
    contactFullName: string,
    contactMail: string,

} & HTMLProps<HTMLDivElement>;

export const ContactCard: FC<ContactCardProps> = ({ className, contactFullName, contactImgSrc, contactMail }) => {
    return(
        <div className={`${className} rounded-[18px] overflow-hidden border border-[#B9B9B9]`}>
            <div className="h-2/3 overflow-hidden"> 
                <img className="h-full w-full object-cover" src={contactImgSrc} alt="contact images" />
            </div>

            <div className="bg-white h-1/3 w-full flex flex-col items-center">
                <h3 className="mt-4 font-nunito font-bold text-base text-[#202224]">{contactFullName}</h3>
                <h4 className="mt-1 font-nunito font-normal text-sm text-[#202224]/60">{contactMail}</h4>
                <a href={`mailto:${contactMail}`}>
                    <MessageBtn className="w-[8.563rem] h-10 mt-5 hover:bg-customGray" />
                </a>
            </div>
        </div>
    );
};