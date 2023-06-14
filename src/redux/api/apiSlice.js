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
	}),
});

export const { useGetProductsQuery, useGetProductByidQuery } = api;
