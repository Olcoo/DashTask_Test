import { productsStock } from "../../data/products";
import { ProductStock } from "../../store/slices/productsStock/type";

export const getProductsStock = async () => {
    const response = await new Promise<ProductStock[]>(resolve => {
      setTimeout(() => {
        resolve(productsStock);
      }, 2000);
    });

    return response;
};