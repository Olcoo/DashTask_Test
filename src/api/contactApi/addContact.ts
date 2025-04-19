import { Contact } from "../../store/slices/contacts/types";
import { axiosInstance } from "../axiousInstance";

export const addContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    const res = await axiosInstance.post('/users', contact);
    return { ...contact, id: Math.floor(Math.random() * 10000) }; //return res.data;
};