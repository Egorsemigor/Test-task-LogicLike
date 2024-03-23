import { configureStore } from "@reduxjs/toolkit";

import coursesSlice from "./horoscope-store/coursesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesSlice,
  },
});
