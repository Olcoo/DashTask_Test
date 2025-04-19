export type OrderStatus = 'Completed' | 'Processing' | 'Rejected';
export type OrderType = 'Electric' | 'Book' | 'Medicine' | 'Mobile' | 'Watch';

export type ContactStateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Order = {
  id: string,
  name: string,
  address: string,
  date: string,
  type: OrderType,
  status: OrderStatus,
};


export type OrdersState = {
    allOrders: Order[],
    filters: {
      date: string,
      type: string,
      status: string,
    },
    fetchStatus: ContactStateStatus,
    error: string | null,
  };