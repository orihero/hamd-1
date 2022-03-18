import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  token: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setProfile, setToken } = profileSlice.actions;
export default profileSlice.reducer;
