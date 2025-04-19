export const deleteProductStock = async (id: string): Promise<string> => {
  await new Promise((res) => setTimeout(res, 500));
  return id;
};