import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/product";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //TODO - brunowbbs: Verificar serializacao
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
