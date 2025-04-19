import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "../../../api";

export const fetchOrders = createAsyncThunk('orders/fetchOrders', getOrders);