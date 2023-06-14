import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		api: api.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
