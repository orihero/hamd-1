import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// http://hamd.loko.uz/api/operator/couriers-way
const initialState = {
  isLoading: true,
  curiers: [],
  isError: false,
};

export const getCuriers = createAsyncThunk(
  "curiers/getCuriers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        "http://hamd.loko.uz/api/operator/couriers-way"
      );
      return res.data.data;
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const curierSlice = createSlice({
  name: "curiers",
  initialState,
  reducers: {
    setCuriers: (state, action) => {
      state.curiers = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCuriers.fulfilled, (state, { payload }) => {
      state.curiers.push(...payload);
    });
  },
});

export const { setCuriers, setLoading } = curierSlice.actions;
export default curierSlice.reducer;
