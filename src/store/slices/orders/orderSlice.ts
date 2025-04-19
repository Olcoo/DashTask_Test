import { Order, OrdersState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "../../thunks";

const initialState: OrdersState = {
    allOrders: [],
    filters: {
      date: '',
      type: '',
      status: '',
    },
    fetchStatus: 'idle',
    error: null,
  };
  
  const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
      setDateFilter: (state, action: PayloadAction<string>) => {
        state.filters.date = action.payload;
      },
      setTypeFilter: (state, action: PayloadAction<string>) => {
        state.filters.type = action.payload;
      },
      setStatusFilter: (state, action: PayloadAction<string>) => {
        state.filters.status = action.payload;
      },
      resetFilters: (state) => {
        state.filters = { date: '', type: '', status: '' };
      },
    },

    extraReducers: (builder) => {
      builder
      .addCase(fetchOrders.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.fetchStatus = 'succeeded';
        state.allOrders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.error = action.error.message ?? "Failed to fetch orders";
      });
    }
  });
  
  export const {
    setDateFilter,
    setTypeFilter,
    setStatusFilter,
    resetFilters,
  } = ordersSlice.actions;
  
  export const orderReducer = ordersSlice.reducer;