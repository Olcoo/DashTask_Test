import { FC, HTMLProps } from "react";

type UserAvatarProps = {
    src: string,
} & HTMLProps<HTMLImageElement>;

export const UserAvatar: FC<UserAvatarProps> = ({ src='', className}) => {
    return(
        <div className={`${className} bg-customGray rounded-full flex items-center justify-center`}>
            {src === ''
            ?
            <svg className="w-6 h-6 text-gray-800 dark:text-black/60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
            </svg>
            :
            <img className='w-full h-full rounded-full object-cover' src={src} alt="user img" />}
        </div>
    );
};