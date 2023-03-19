import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { ProductApi } from "../../../api/product";
import { setIsFulfilled, setIsPending, setIsReject } from "../../middlewares";
import type { ProductSliceState } from "./types";

const initialState: ProductSliceState = {
  productList: [],
  productDetails: {},
  loading: false,
  error: false,
};

export const fetchProducts = createAsyncThunk("product/get_products", () =>
  ProductApi.getProducts()
);

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return { ...state, productList: action.payload.data.products };
      })
      .addMatcher(isPending(fetchProducts), (state) => setIsPending(state))
      .addMatcher(isRejected(fetchProducts), (state) => setIsReject(state))
      .addMatcher(isFulfilled(fetchProducts), (state) => setIsFulfilled(state));
  },
});

export const ProductReducer = slice.reducer;
