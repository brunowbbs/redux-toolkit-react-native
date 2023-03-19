import { ProductType } from "../../../api/product/types";

export type ProductSliceState = {
  productList: ProductType[];
  productDetails: ProductType;
  loading: boolean;
  error: boolean;
};
