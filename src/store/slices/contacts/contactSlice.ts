import { createSlice } from "@reduxjs/toolkit";
import { ContactState } from "./types";
import { createContact, fetchContacts } from "../../thunks";


const initialState: ContactState = {
    contacts: [],
    fetchStatus: 'idle',
    createtatus: 'idle',
};


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.fetchStatus = 'loading';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded';
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, state => {
                state.fetchStatus = 'failed';
            })
            .addCase(createContact.pending, state => {
                state.createtatus = 'loading';
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.createtatus = 'succeeded';
                state.contacts.push(action.payload);
            })
            .addCase(createContact.rejected, state => {
                state.createtatus = 'failed';
            })
            
    }
});

export const contactReducer = contactSlice.reducer;