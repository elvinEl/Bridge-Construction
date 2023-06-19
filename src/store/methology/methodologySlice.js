import { createSlice } from "@reduxjs/toolkit";
import { fetchMethodology } from "./methodologyActions";

export const methodologySlice = createSlice({
  name: "methodology",
  initialState: {
    methodologyData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchMethodology.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMethodology.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.methodologyData = payload;
    },
    [fetchMethodology.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});
export default methodologySlice.reducer;
