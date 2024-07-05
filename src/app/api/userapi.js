import { Apiservices } from "../middlewares/apiservices";

const userQuery = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (userinfo) => ({
        url: "/register",
        method: "POST",
        body: userinfo,
        headers: {},
      }),
    }),
  }),
});

const { useRegisterUserMutation } = userQuery;
