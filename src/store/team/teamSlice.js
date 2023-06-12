import { createSlice } from "@reduxjs/toolkit";
import { fetchTeam } from "../team/teamActions";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    teamData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchTeam.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTeam.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.teamData = payload;
    },
    [fetchTeam.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default teamSlice.reducer;
