import { useSelector } from "react-redux";
import { HTMLProps, useEffect } from "react";
import { fetchOrders } from "../../../../store/thunks";
import { selectError, selectFilteredOrders, selectStatus } from "../../../../store/slices/orders/filterSelectors/filterSelectors";
import { useAppDispatch, useFetchToast } from "../../../../hooks";

export const OrderTable = ({ className }: HTMLProps<HTMLDivElement>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = useSelector(selectFilteredOrders);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  
  useFetchToast(status, error);


  const statusStyles: Record<string, string> = {
    Completed: 'bg-statusCompleted text-statusCompleted',
    Processing: 'bg-statusProcessing text-statusProcessing',
    Rejected: 'bg-statusRejected text-statusRejected',
  };

  return (
    <div className={`${className} overflow-x-auto`}>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left text-sm font-nunito font-extrabold text-customBlack/90">
            <th className="py-3 px-7">ID</th>
            <th className="py-3 px-7">NAME</th>
            <th className="py-3 px-7">ADDRESS</th>
            <th className="py-3 px-7">DATE</th>
            <th className="py-3 px-7">TYPE</th>
            <th className="py-3 px-7">STATUS</th>
          </tr>
        </thead>
        <tbody className="font-nunito font-semibold text-sm text-customBlack/90 text-nowrap">
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="p-7">{order.id}</td>
              <td className="p-7">{order.name}</td>
              <td className="p-7">{order.address}</td>
              <td className="p-7">{order.date}</td>
              <td className="p-7">{order.type}</td>
              <td className="p-7">
                <span className={`px-4 py-[0.375rem] rounded-[4.5px] text-xs font-bold font-nunito ${statusStyles[order.status]}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
