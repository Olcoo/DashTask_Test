import { useDispatch, useSelector } from "react-redux";
import { OrderFilter } from "./OrderFilter/OrderFilter";
import { selectFilters } from "../../../../store/slices/orders/filterSelectors/filterSelectors";
import { resetFilters, setDateFilter, setStatusFilter, setTypeFilter } from "../../../../store/slices";
import { CustomSvg } from "../../../../components";

export const OrderListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  

  return (
    <div className="flex w-fit flex-nowrap items-center bg-white h-[70px] rounded-[10px]">
      <OrderFilter>
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11 9.75C16.3848 9.75 20.75 7.73528 20.75 5.25C20.75 2.76472 16.3848 0.75 11 0.75C5.61522 0.75 1.25 2.76472 1.25 5.25C1.25 7.73528 5.61522 9.75 11 9.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.25 5.25C1.25253 9.76548 4.35614 13.688 8.75 14.729V21C8.75 22.2426 9.75736 23.25 11 23.25C12.2426 23.25 13.25 22.2426 13.25 21V14.729C17.6439 13.688 20.7475 9.76548 20.75 5.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </OrderFilter>

      <OrderFilter>
        <h3 className="font-nunito font-bold text-sm text-customBlack">Filter By</h3>
      </OrderFilter>

      <OrderFilter>
        <select className="bg-transparent text-customBlack cursor-pointer font-nunito font-bold text-sm" value={filters.date} onChange={(e) => dispatch(setDateFilter(e.target.value))}>
          <option value="">All Dates</option>
          <option value="14 Feb 2019">14 Feb 2019</option>
        </select>
      </OrderFilter>

      <OrderFilter>
        <select className="bg-transparent text-customBlack cursor-pointer font-nunito font-bold text-sm" value={filters.type} onChange={(e) => dispatch(setTypeFilter(e.target.value))}>
          <option value="">All Types</option>
          <option value="Electric">Electric</option>
          <option value="Book">Book</option>
          <option value="Medicine">Medicine</option>
          <option value="Mobile">Mobile</option>
          <option value="Watch">Watch</option>
        </select>
      </OrderFilter>

      <OrderFilter>
          <select className="bg-transparent text-customBlack cursor-pointer font-nunito font-bold text-sm" value={filters.status} onChange={(e) => dispatch(setStatusFilter(e.target.value))}>
            <option value="">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Rejected">Rejected</option>
          </select>
      </OrderFilter>

      <OrderFilter className="border-none">
        <button onClick={() => dispatch(resetFilters())} className="text-customRed bg-transparent font-nunito font-semibold text-sm flex">
          <CustomSvg className="w-[18px] h-[18px] mr-2" color="text-customRed" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" path="M9 3.75V0.75L5.25 4.5L9 8.25V5.25C11.4825 5.25 13.5 7.2675 13.5 9.75C13.5 12.2325 11.4825 14.25 9 14.25C6.5175 14.25 4.5 12.2325 4.5 9.75H3C3 13.065 5.685 15.75 9 15.75C12.315 15.75 15 13.065 15 9.75C15 6.435 12.315 3.75 9 3.75Z"/>
          Reset Filter
        </button>
      </OrderFilter>
    </div>
  );
};
