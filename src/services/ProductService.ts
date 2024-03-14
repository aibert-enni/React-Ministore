import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IPostCard, ITestimonial, IInstaPost } from "../models/apiModels";


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (build) => ({
        fetchByCategory: build.query<IProduct[], string>({
            query: (category: string) => ({
                url: '/products',
                params: {
                    category: category
                },
            })
        }),
        fetchPostCards: build.query<IPostCard[], string>({
            query: () => ({
                url: '/postsCard',
            })
        }),
        fetchTestimonials: build.query<ITestimonial[], number>({
            query: (limit: number) => ({
                url: '/testimonials',
                params: {
                    _limit: limit
                }
            })
        }),
        fetchIntsaPosts: build.query<IInstaPost[], string>({
            query: () => ({
                url: '/instaPosts'
            })
        })
    })
})