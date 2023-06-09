import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/constants";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: (builder) => ({
		// products
		getProducts: builder.query({
			query: () => "products",
		}),

		getProductByid: builder.query({
			query: (id) => `products/${id}`,
		}),

		// orders
		createOrder: builder.mutation({
			query: (newOrder) => ({
				url: "orders",
				method: "POST",
				body: newOrder,
			}),
		}),

		getOrder: builder.query({
			query: (ref) => `orders/${ref}`,
		}),

		getOrders: builder.query({
			query: () => `orders`,
		}),

		// payment
		createPaymentIntent: builder.mutation({
			query: (data) => ({
				url: "payments/intents",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByidQuery,
	useCreateOrderMutation,
	useGetOrderQuery,
	useGetOrdersQuery,
	useCreatePaymentIntentMutation,
} = api;
