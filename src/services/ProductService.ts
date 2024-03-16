import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IProduct,
  IPostCard,
  ITestimonial,
  IInstaPost,
  IPaginate,
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
        page: number;
        per_page: number;
        sort: string;
      }
    >({
      query: ({ category, page, per_page, sort }) => ({
        url: "/products",
        params: {
          category: category,
          _page: page,
          _per_page: per_page,
          _sort: sort,
        },
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
