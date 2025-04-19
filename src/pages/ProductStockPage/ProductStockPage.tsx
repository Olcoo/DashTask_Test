import { ChangeEvent } from "react";
import { CustomSearchInput, PageTitle } from "../../components";
import { ProductStockTable } from "../../modules";
import { setSearchQuery } from "../../store/slices/productsStock/productSockSlice";
import { useAppDispatch } from "../../hooks";

export const ProductsStockPage = () => {
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        dispatch(setSearchQuery(e.target.value))
    };

    return (
        <>
            <section className="flex justify-between items-center mb-6">
                <PageTitle>Product Stock</PageTitle>
                <CustomSearchInput onChange={handleChange} placeholder="Search product name" className="ml-6 min-w-24 w-[22.22%] h-[1.75rem] sm:h-[2.375rem] bg-white rounded-full px-3 border border-[#D5D5D5]"/>
            </section>
            <ProductStockTable className="rounded-[14px] border border-customGray shadow"/>
        </>
    );
};