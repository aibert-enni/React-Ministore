import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IProduct,
  IPostCard,
  ITestimonial,
  IInstaPost,
  IPaginate,
  IFilter,
} from "../models/apiModels";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    fetchByCategory: build.query<IProduct[], string>({
      query: (category: string) => ({
        url: "/products",
        params: {
          category: category,
        },
      }),
    }),
    fetchByPaginate: build.query<
      IPaginate,
      {
        category: string;
        brand: string;
        page: number;
        per_page: number;
        sort: string;
      }
    >({
      query: ({ category, brand, page, per_page, sort }) => ({
        url: "/products",
        params: {
          category: category,
          brand: brand,
          _page: page,
          _per_page: per_page,
          _sort: sort,
        },
      }),
    }),
    fetchProductCategoris: build.query<IFilter[], "">({
      query: () => ({
        url: "/productCategories",
      }),
    }),
    fetchProductBrands: build.query<IFilter[], "">({
      query: () => ({
        url: "/productBrands",
      }),
    }),
    fetchPostCards: build.query<IPostCard[], string>({
      query: () => ({
        url: "/postsCard",
      }),
    }),
    fetchTestimonials: build.query<ITestimonial[], number>({
      query: (limit: number) => ({
        url: "/testimonials",
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchIntsaPosts: build.query<IInstaPost[], string>({
      query: () => ({
        url: "/instaPosts",
      }),
    }),
  }),
});
