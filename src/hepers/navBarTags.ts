import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { setDataNavBarItems } from "../store/horoscope-store/coursesSlice";
import { ICoursesItem } from "../types/types";

export const navBarTags = async (data: ICoursesItem[], dispatch: any) => {
  const arr: string[] = ["Все темы"];
  data.map((item) => {
    arr.push(...item.tags);
  });

  const uniqNavBarArr = arr.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });
  console.log("uniqNavBarArr", uniqNavBarArr);
  await dispatch(setDataNavBarItems(uniqNavBarArr));
};
