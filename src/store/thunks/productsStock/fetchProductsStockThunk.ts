import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsStock } from "../../../api";

export const fetchProductsStock = createAsyncThunk('productsStock/fetchProductStock', getProductsStock);