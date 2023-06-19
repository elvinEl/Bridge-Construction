import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMethodology = createAsyncThunk(
  "methodology/fetchMethodology",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/features`, {
      headers: {
        language: payload.language,
      },
    });
console.log(response);
    return response.data;
  }
);
