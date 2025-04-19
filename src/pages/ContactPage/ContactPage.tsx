import { useLocation, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../components/CustomButtons/CustomBtn/CustomBtn";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { useEffect } from "react";
import { fetchContacts } from "../../store/thunks";
import { PageTitle } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";


export const ContactPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { contacts } = useAppSelector((state) => state.contacts);
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, []);

    const handleClick = () => {
        navigate('new', { state: { from: location } });
    };

    return (
        <>
            <div className="flex items-center justify-between mb-[1.875rem]">
                <PageTitle>Contact</PageTitle>
                <CustomBtn onClick={handleClick}>
                    Add New Contact
                </CustomBtn>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] gap-[30px]">
                {contacts.map(({ id, name, email }) =>  <ContactCard key={id} contactFullName={name} contactMail={email} contactImgSrc={'/images/test-contact-image-2.png'} className=""/>)}
            </div>

        </>
    );
};