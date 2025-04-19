import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const selectProductsStock = (state: RootState) => state.productsStock.productsStock;
const selectSearchQuery = (state: RootState) => state.productsStock.searchQuery;

export const selectFilteredProducts = createSelector(
    [selectProductsStock, selectSearchQuery],
    (productsStock, searchQuery) => {
      if (!searchQuery.trim()) return productsStock;
  
      return productsStock.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
);
