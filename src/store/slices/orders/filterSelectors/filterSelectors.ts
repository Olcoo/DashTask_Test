import { createSelector } from 'reselect';
import { RootState } from '../../../store';

export const selectOrdersState = (state: RootState) => state.orders;

export const selectAllOrders = createSelector(
  [selectOrdersState],
  (ordersState) => ordersState.allOrders,
);

export const selectFilters = createSelector(
  [selectOrdersState],
  (ordersState) => ordersState.filters,
);

export const selectStatus = createSelector(
  [selectOrdersState],
  (ordersState) => ordersState.fetchStatus,
);

export const selectError = createSelector(
  [selectOrdersState],
  (ordersState) => ordersState.error,
);

export const selectFilteredOrders = createSelector(
  [selectAllOrders, selectFilters],
  (orders, filters) => {
    const { date, type, status } = filters;

    return orders.filter(order =>
      (!date || order.date === date) &&
      (!type || order.type === type) &&
      (!status || order.status === status)
    );
  }
);
