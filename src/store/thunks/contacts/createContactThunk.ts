import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "../../slices/contacts/types";
import { addContact } from "../../../api";

export const createContact = createAsyncThunk(
    'contact/createContact',
    async (contact: Omit<Contact, 'id'>) => await addContact(contact)
);