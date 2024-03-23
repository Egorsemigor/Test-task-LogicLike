import { useEffect } from "react";
import CourseCard from "../../components/course_card/CourseCard";
import NavBar from "../../components/nav-bar/NavBar";
import { navBarTags } from "../../hepers/navBarTags";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setCoursesFilterArr } from "../../store/horoscope-store/coursesSlice";
import { getCoursesThunk } from "../../store/horoscope-store/thunk";
import styles from "./CourseScreen.module.scss";

const CourseScreen = () => {
  const dispatch = useAppDispatch();

  const coursesFilterArr = useAppSelector(
    (state) => state.courses.coursesFilterArr
  );

  const checkNavBarItem = useAppSelector(
    (state) => state.courses.checkNavBarItem
  );

  const coursesArr = useAppSelector((state) => state.courses.coursesArr);

  const dataNavBarItems = useAppSelector(
    (state) => state.courses.dataNavBarItems
  );

  useEffect(() => {
    dispatch(getCoursesThunk());
  }, []);

  useEffect(() => {
    navBarTags(coursesFilterArr, dispatch);
  }, [coursesArr]);

  useEffect(() => {
    checkNavBarItem === "Все темы"
      ? dispatch(setCoursesFilterArr(coursesArr))
      : dispatch(
          setCoursesFilterArr(
            coursesArr.filter((item) => item.tags.includes(checkNavBarItem))
          )
        );
  }, [checkNavBarItem, dataNavBarItems]);

  return (
    <div className={styles.courses_screen}>
      <NavBar data={dataNavBarItems} />
      <div className={styles.courses_container}>
        {coursesFilterArr.map((item, index) => (
          <CourseCard
            key={item.id}
            name={item.name}
            bgColor={item.bgColor}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default CourseScreen;
