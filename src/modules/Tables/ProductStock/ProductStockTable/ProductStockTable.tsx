import { HTMLProps, useEffect } from "react";
import { fetchProductsStock } from "../../../../store/thunks/productsStock/fetchProductsStockThunk";
import { deleteProductsStock } from "../../../../store/thunks/productsStock/deleteProductStockThunk";
import { selectFilteredProducts } from "../../../../store/slices/productsStock/productStockSelectors/productStockSelectors";
import { useAppDispatch, useAppSelector, useFetchToast } from "../../../../hooks";

export const ProductStockTable = ({ className }: HTMLProps<HTMLDivElement>) => {

  const dispatch = useAppDispatch();
  const { error, fetchStatus, deleteStatus } = useAppSelector((state) => state.productsStock);
  const filteredProducts = useAppSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProductsStock());
  }, [dispatch]);
  
  useFetchToast(fetchStatus, error);
  useFetchToast(deleteStatus, error);


  return (
    <div className={`${className} overflow-x-auto`}>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left text-sm font-nunito font-extrabold text-customBlack/90">
            <th className="py-3 px-7 text-center">Image</th>
            <th className="py-3 px-7">Product Name</th>
            <th className="py-3 px-7">Category</th>
            <th className="py-3 px-7">Price</th>
            <th className="py-3 px-7">Piece</th>
            <th className="py-3 px-7">Available Color</th>
            <th className="py-3 px-7 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="font-nunito font-semibold text-sm text-customBlack/90 text-nowrap">
          {filteredProducts.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-7 flex justify-center">
                <img src={product.image} alt={product.name} className="min-w-[3.75rem] w-[3.75rem] h-[3.75rem] min-h-[3.75rem] rounded" />
              </td>
              <td className="p-7">{product.name}</td>
              <td className="p-7">{product.category}</td>
              <td className="p-7">${product.price.toFixed(2)}</td>
              <td className="p-7">{product.piece}</td>
              <td className="p-7">
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </td>
              <td className="p-7 text-center align-middle">
                <div className="inline-flex items-center justify-center">
                  <button className="px-4 h-8 border border-customGray bg-customGray rounded-l-lg hover:bg-customDarkGray/20">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.6">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.69732 10.424L7.22266 10.778L7.57599 8.30267L13.94 1.93867C14.5258 1.35288 15.4755 1.35288 16.0613 1.93867C16.6471 2.52446 16.6471 3.47421 16.0613 4.06L9.69732 10.424Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.2324 2.646L15.3538 4.76733" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </button>
                  <button onClick={() => dispatch(deleteProductsStock(product.id))} className="px-4 h-8 border border-l-0 border-customGray bg-customGray rounded-r-lg hover:bg-customDarkGray/20">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.1996 15.4H4.79961C4.13687 15.4 3.59961 14.8627 3.59961 14.2V3.4H14.3996V14.2C14.3996 14.8627 13.8624 15.4 13.1996 15.4Z" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.20078 11.8V7" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.8004 11.8V7" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.19922 3.4H16.7992" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};