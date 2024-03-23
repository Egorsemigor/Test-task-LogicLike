import { createAsyncThunk } from "@reduxjs/toolkit";

import { aiApi } from "../../api/ai-api";

export const getCoursesThunk = createAsyncThunk(
  "coursesSlice/getCoursesThunk",
  async () => {
    return await aiApi.getCourses();
  }
);
