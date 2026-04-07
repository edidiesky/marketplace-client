import { STORE_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const StoreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStore: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${STORE_URL}`,
      }),
      providesTags: ["Store"],
    }),
    createStore: builder.mutation({
      query: ({ storeid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${STORE_URL}/${storeid}`,
      }),
    }),
    getSingleStore: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${STORE_URL}/${data?.id}`,
      }),
    }),
    updateStore: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${STORE_URL}/${data?.id}`,
      }),
    }),
    deleteStore: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${STORE_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useGetAllStoreQuery,
  useDeleteStoreMutation,
  useUpdateStoreMutation,
  useGetSingleStoreQuery,
  useCreateStoreMutation,
} = StoreApiSlice;
