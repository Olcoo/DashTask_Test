import { orders } from "../../data/orders";
import { Order } from "../../store/slices/orders/types";

export const getOrders = async () => {
    const response = await new Promise<Order[]>(resolve => {
      setTimeout(() => {
        resolve(orders);
      }, 2000);
    });

    return response;
};