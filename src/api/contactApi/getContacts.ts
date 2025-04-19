import { Contact } from "../../store/slices/contacts/types";
import { axiosInstance } from "../axiousInstance";

export const getContacts = async (): Promise<Contact[]> => {
    const res = await axiosInstance.get('/users');
    return res.data;
};