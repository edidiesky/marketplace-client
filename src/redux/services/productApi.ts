import { PRODUCT_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStoreProduct: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${PRODUCT_URL}/store/${data?.storeid}`,
      }),
      providesTags: ["Product"]
    }),
    createProduct: builder.mutation({
      query: ({ storeid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${PRODUCT_URL}/store/${storeid}`,
      }),
      invalidatesTags: ["Product"]

    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        method: "GET",
        credentials: "include",
        url: `${PRODUCT_URL}/${id}`,
      }),
      providesTags: ["Product"]

    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${PRODUCT_URL}/${data?.id}`,
      }),
      invalidatesTags: ["Product"]

    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        credentials: "include",
        url: `${PRODUCT_URL}/${id}`,
      }),
      invalidatesTags: ["Product"]

    }),
  }),
});

export const {
  useGetAllStoreProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
  useCreateProductMutation,
} = productApiSlice;
