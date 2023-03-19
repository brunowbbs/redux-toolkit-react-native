import { AxiosResponse } from "axios";
import Api from "..";
import type { ProductsType } from "./types";

export class ProductApi {
  static async getProducts(): Promise<AxiosResponse<ProductsType>> {
    return await Api.get("/products");
  }
}
