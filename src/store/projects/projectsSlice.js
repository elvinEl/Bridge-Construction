import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./projectsActions";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projectData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjects.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.projectData = payload;
    },
    [fetchProjects.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default projectSlice.reducer;
