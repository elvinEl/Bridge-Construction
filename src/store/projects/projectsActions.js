import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/projects`, {
      headers: {
        language: payload.language,
      },
    });
    return response.data;
  }
);

// export const fetchProjectsById = createAsyncThunk(
//   "projects/fetcProjectsById",
//   async (payload) => {
//     const baseUrl = process.env.REACT_APP_BASE_URL;
//     const response = await axios.get(
//       `${baseUrl}/projects/${payload.dataS.general_key}`,
//       {
//         headers: {
//           language: payload.language,
//         },
//       }
//     );
//     return response.data;
//   }
// );
