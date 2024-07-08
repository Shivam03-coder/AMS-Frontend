import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerd_User_info: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const userSlice = createSlice({
  name: "userstate",
  initialState,
  reducers: {
    setUsercredentials: (state, action) => {
      state.registerd_User_info = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    clearUsercredentials: (state, action) => {
      state.registerd_User_info = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { clearUsercredentials, setUsercredentials } = userSlice.actions;
