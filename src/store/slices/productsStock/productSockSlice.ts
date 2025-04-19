import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductStock, ProductStockState } from "./type";
import { fetchProductsStock } from "../../thunks/productsStock/fetchProductsStockThunk";
import { deleteProductsStock } from "../../thunks/productsStock/deleteProductStockThunk";

const initialState: ProductStockState = {
    productsStock: [],
    fetchStatus: "idle",
    deleteStatus: 'idle',
    error: null,
    searchQuery: '',
};


const productsStockSlice = createSlice({
    name: "productsStock",
    initialState,
    reducers: {
      setSearchQuery: (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsStock.pending, (state) => {
          state.fetchStatus = "loading";
        })
        .addCase(fetchProductsStock.fulfilled, (state, action: PayloadAction<ProductStock[]>) => {
          state.fetchStatus = "succeeded";
          state.productsStock = action.payload;
        })
        .addCase(fetchProductsStock.rejected, (state, action) => {
          state.fetchStatus = "failed";
          state.error = action.error.message ?? "Something went wrong with loading products";
        })

        .addCase(deleteProductsStock.pending, (state) => {
          state.deleteStatus = "loading";
        })
        .addCase(deleteProductsStock.fulfilled, (state, action: PayloadAction<string>) => {
          state.deleteStatus = 'succeeded';
          state.productsStock = state.productsStock.filter(
            (product) => product.id !== action.payload
          );
        })
        .addCase(deleteProductsStock.rejected, (state, action) => {
          state.deleteStatus = 'failed';
          state.error = action.error.message ?? "Something went wrong with the product removal";
        })
    },
});

export const { setSearchQuery } = productsStockSlice.actions;
export const productsStockReducer = productsStockSlice.reducer;