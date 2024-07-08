import { Apiservices } from "../middlewares/apiservices";

const userQuery = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (userinfo) => ({
        url: "/register",
        method: "POST",
        body: userinfo,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    loginUser: build.mutation({
      query: (userlogininfo) => ({
        url: "/user-login",
        method: "POST",
        body: userlogininfo,
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterUserMutation , useLoginUserMutation} = userQuery;
