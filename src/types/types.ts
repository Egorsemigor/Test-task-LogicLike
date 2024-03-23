export interface ICourseCard {
  name: string;
  bgColor: string;
  image: string;
}

export interface INavBarData {
  data: string[];
}

export interface ICoursesItem {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface CoursesArr {
  isLoadingCourses: boolean | null;
  coursesArr: ICoursesItem[];
  checkNavBarItem: string;
  dataNavBarItems: string[];
  coursesFilterArr: ICoursesItem[];
}
