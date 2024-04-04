import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Product,
  PostCard,
  InstaPost,
  Paginate,
  Filter,
  Reviews,
  Order,
  Question,
} from "../models/apiProductModels";
import { IUser, SignFields } from "../models/apiUserModels";

export const appApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    fetchById: build.query<Product[], string>({
      query: (id: string) => ({
        url: "products",
        params: {
          id: id
        }
      })
    }),
    fetchByCategory: build.query<Product[], string | null>({
      query: (category: string | null) => {
        const params: { [key: string]: string } = {};
        if (category != null) params.category = category;

        return {
          url: "/products",
          params: params,
        };
      },
    }),
    fetchByPaginate: build.query<
      Paginate,
      {
        category: string;
        brand: string;
        page: number;
        per_page: number;
        sort: string;
        search: string;
      }
    >({
      query: ({ category, brand, page, per_page, sort, search }) => {
        const params: { [key: string]: string | number } = {
          _page: page,
          _limit: per_page,
        };
        if (category != "") params.category = category;
        if (brand != "") params.brand = brand;
        if (sort != "") params._sort = sort;
        if (search != "") params.name_like = search;
        return {
          url: "/products",
          params: params,
        };
      },
      transformResponse(data: Product[], meta): Paginate {
        const Link: string[] | undefined = meta?.response?.headers
          .get("Link")
          ?.split(",");
        let last = "";
        let next: string | null = "";
        let prev: string | null = "";
        if (Link) {
          const lastItem = Link[Link?.length - 1];
          last = lastItem.charAt(lastItem.indexOf("=") + 1);
          const nextIndex = Link.findIndex((item) =>
            item.includes('rel="next"'),
          );
          next =
            nextIndex === -1
              ? null
              : Link[nextIndex].slice(
                  Link[nextIndex].indexOf("=") + 1,
                  Link[nextIndex].indexOf("&"),
                );
          const prevIndex = Link.findIndex((item) =>
            item.includes('rel="prev"'),
          );
          prev =
            prevIndex === -1
              ? null
              : Link[prevIndex].slice(
                  Link[prevIndex].indexOf("=") + 1,
                  Link[prevIndex].indexOf("&"),
                );
        }
        return {
          data: data,
          first: 1,
          items: Number(meta?.response?.headers.get("X-Total-Count")),
          last: Number(last),
          next: next != null ? Number(next) : next,
          prev: prev != null ? Number(prev) : prev,
        };
      },
    }),
    fetchProductCategories: build.query<Filter[], "">({
      query: () => ({
        url: "/productCategories",
      }),
    }),
    fetchProductBrands: build.query<Filter[], "">({
      query: () => ({
        url: "/productBrands",
      }),
    }),
    fetchPostCards: build.query<PostCard[], string>({
      query: () => ({
        url: "/postsCard",
      }),
    }),
    fetchReviews: build.query<Reviews[], number>({
      query: (limit: number) => ({
        url: "/reviews",
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchReviewsByIds: build.query<Reviews[], string[]>({
      query: (ids: string[]) => {
        let url = "/reviews?"
        ids.map(id => url += `id=${id}&`)
        return {
          url: url
        }
      },
    }),
    fetchIntsaPosts: build.query<InstaPost[], string>({
      query: () => ({
        url: "/instaPosts",
      }),
    }),
    createOrder: build.mutation<Order, Order>({
      query: (order: Order)  => ({
        url: '/orders',
        method: 'POST',
        body: order
      })
    }),
    createQuestion: build.mutation<Question, Question>({
      query: (question: Question) => ({
        url: '/questions',
        method: 'POST',
        body: question
      })
    }),
    // below user requests
    fetchUser: build.query<IUser[], SignFields | undefined>({
      query: (signFields: SignFields | undefined) => {
        if(!signFields) signFields = {login: '', password: ''}
        return {
          url: '/users',
          params: {
              login: signFields.login,
              password: signFields.password
          }
        }
      }
  }),
  createUser: build.mutation<IUser, IUser>({
      query: (user: IUser) => ({
          url: '/users',
          method: 'POST',
          body: user
      })
  })
  }),
});
