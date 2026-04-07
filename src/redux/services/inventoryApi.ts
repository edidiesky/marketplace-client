import { INVENTORY_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const InventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStoreInventory: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${INVENTORY_URL}/${data?.productid}`,
      }),
      providesTags: ["Inventory"]
    }),
    createInventory: builder.mutation({
      query: ({ productid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${INVENTORY_URL}/${productid}`,
      }),
    }),
    getSingleInventory: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${INVENTORY_URL}/${data?.id}`,
      }),
    }),
    updateInventory: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${INVENTORY_URL}/${data?.id}`,
      }),
    }),
    deleteInventory: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${INVENTORY_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useGetAllStoreInventoryQuery,
  useDeleteInventoryMutation,
  useUpdateInventoryMutation,
  useGetSingleInventoryQuery,
  useCreateInventoryMutation,
} = InventoryApiSlice;
