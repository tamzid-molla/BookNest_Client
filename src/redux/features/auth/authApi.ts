import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/users` as string, credentials: "include" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    profile: build.query<void,void>({
      query: () => "/me",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useProfileQuery } = authApi;
