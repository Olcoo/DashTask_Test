import { PageTitle } from "../../components";
import { OrderListFilters, OrderTable } from "../../modules";

export const OrderListsPage = () => {
    return (
        <>
            <PageTitle className="mb-6">Order Lists</PageTitle>
            <div className="overflow-x-auto min-w-[17rem] max-w-fit rounded-[10px] mb-6 shadow border border-customGray">
                <OrderListFilters/>
            </div>
            <OrderTable className="rounded-[14px] border border-customGray shadow"/>
        </>
    );
};