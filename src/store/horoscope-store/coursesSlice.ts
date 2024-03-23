import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navBarTags } from "../../hepers/navBarTags";
import { CoursesArr } from "../../types/types";
import { getCoursesThunk } from "./thunk";

const initialState: CoursesArr = {
  isLoadingCourses: null,
  coursesArr: [{ name: "", id: "", image: "", bgColor: "", tags: [""] }],
  checkNavBarItem: "Все темы",
  dataNavBarItems: ["Все темы"],
  coursesFilterArr: [{ name: "", id: "", image: "", bgColor: "", tags: [""] }],
};

const coursesSlice = createSlice({
  name: "horoscopeSlice",
  initialState,
  reducers: {
    setCheckNavBarItem: (state, action) => {
      state.checkNavBarItem = action.payload;
    },
    setDataNavBarItems: (state, action) => {
      state.dataNavBarItems = action.payload;
    },
    setCoursesFilterArr: (state, action) => {
      state.coursesFilterArr = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get Horoscope
    builder
      .addCase(getCoursesThunk.pending, (state, action) => {
        state.isLoadingCourses = true;
      })
      .addCase(getCoursesThunk.fulfilled, (state, action) => {
        state.isLoadingCourses = false;
        state.coursesArr = action.payload;
        state.coursesFilterArr = action.payload;
      })
      .addCase(getCoursesThunk.rejected, (state, action) => {
        state.isLoadingCourses = false;
      });
  },
});

export const { setCheckNavBarItem, setDataNavBarItems, setCoursesFilterArr } =
  coursesSlice.actions;
export default coursesSlice.reducer;
