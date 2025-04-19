import { PageTitle } from "../../components";
import { AddContactForm } from "../../modules";

export const AddNewContactPage = () => {

    return(
        <>
            <PageTitle className="mb-9">Add New Contact</PageTitle>            
            <AddContactForm/>
        </>
    );
};