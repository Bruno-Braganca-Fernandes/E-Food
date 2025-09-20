import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../types'
import { CheckoutPayload, CheckoutResponse } from '../models/checkout'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => '/restaurantes'
        }),

        getRestaurantById: builder.query<Restaurant, string>({
            query: (id) => `/restaurantes/${id}`
        }),

        checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
            query: (body) => ({
                url: '/checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
    useCheckoutMutation
} = api
