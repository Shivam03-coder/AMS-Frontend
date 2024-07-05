import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const Apiservices = createApi({
  reducerPath: "apiservices",
  baseQuery,
  refetchOnReconnect: true,
  tagTypes: ["User"],
  endpoints: (build) => ({}),
});
