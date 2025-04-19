import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductStock } from "../../../api";

export const deleteProductsStock = createAsyncThunk<string, string>('productsStock/deleteProductStock', deleteProductStock);