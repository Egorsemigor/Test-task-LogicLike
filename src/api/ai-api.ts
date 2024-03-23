import Api from "./api";

import { ICoursesItem } from "../types/types";

export const aiApi = {
  getCourses() {
    return Api.get<ICoursesItem[]>("/courses.json");
  },
};
