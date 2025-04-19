export type ProductStock = {
    id: string;
    name: string;
    category: string;
    price: number;
    piece: number;
    image: string;
    colors: string[];
};

type ProductStockStateStatus = "idle" | "loading" | "succeeded" | "failed";

export type ProductStockState = {
    productsStock: ProductStock[];
    fetchStatus: ProductStockStateStatus,
    deleteStatus: ProductStockStateStatus,
    error: string | null,
    searchQuery: string,
  }