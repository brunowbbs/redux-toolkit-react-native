import { requestAxios } from "../services/axios";

export default class Api {
  static get(url: string) {
    return requestAxios.get(url);
  }
}
