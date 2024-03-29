import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
    reducerPath: "servicesApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070' }),
    endpoints: (build) =>({
        getServices: build.query({
            query: () => ({
                url: "/api/services",
            }),
        }),
        getServicesDetails: build.query({
            query:(id) =>({
                url: `/api/services/${id}`,
            }),
        }),
    }),
})

export const {useGetServicesQuery, useGetServicesDetailsQuery} = servicesApi