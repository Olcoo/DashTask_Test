import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../../../api";

export const fetchContacts = createAsyncThunk('contact/fetchContacts', getContacts);