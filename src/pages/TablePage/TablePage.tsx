import { PageTitle } from "../../components";
import { OrderTable, ProductStockTable } from "../../modules";

export const TablePage = () => {
    return (
        <>
            <PageTitle>Table</PageTitle>
            <div className="w-full h-[2px] my-6 bg-customBlack/10"/>
            <div className="max-h-[507px] overflow-y-auto rounded-[14px]">
                <OrderTable/>
            </div>
            <div className="w-full h-[2px] my-6 bg-customBlack/10"/>
            <div className="max-h-[513px] overflow-y-auto rounded-[14px]">
                <ProductStockTable/>
            </div>
        </>
    );
};