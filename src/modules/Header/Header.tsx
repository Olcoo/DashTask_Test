import { BurgerMenu, CustomSearchInput, LanguageDropdown, NotifyBell, UserDropdown } from "../../components";

export const Header = () => {
    return (
        <div className="bg-white h-full flex justify-between items-center px-[1.875rem]">
            <section className="flex items-center w-[40.65%]">
                <BurgerMenu className="min-w-[24px] w-[24px] h-[24px] min-h-[25px]"/>
                <CustomSearchInput placeholder="Search" className="ml-6 min-w-24 w-full h-[1.75rem] sm:h-[2.375rem] bg-[#F5F6FA] rounded-full px-3 border border-[#D5D5D5]"/>
            </section>

            <section className="flex items-center">
            <NotifyBell className="w-[18px] h-[20px] sm:w-[24px] sm:h-[26px]"/>
            <LanguageDropdown className="ml-[1.875rem]"/>
            <UserDropdown className="ml-[1.688rem]"/>
            </section>
        </div>
    );
};
