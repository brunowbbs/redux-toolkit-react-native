export type ProductType = {
  id?: number;
  title?: string;
  description?: string;
};

export type ProductsType = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};
