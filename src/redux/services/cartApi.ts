import { CART_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const CartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserCart: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${CART_URL}`,
      }),
    }),
    createCart: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${CART_URL}`,
      }),
    }),
    getSingleCart: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${CART_URL}/${data?.id}/${data?.CartUserId}`,
      }),
    }),
    updateCart: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${CART_URL}/${data?.id}/${data?.Cartuserid}`,
      }),
    }),
    deleteCart: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${CART_URL}/${data?.id}/${data?.Cartuserid}`,
      }),
    }),
  }),
});

export const {
  useGetAllUserCartQuery,
  useDeleteCartMutation,
  useUpdateCartMutation,
  useGetSingleCartQuery,
  useCreateCartMutation,
} = CartApiSlice;
