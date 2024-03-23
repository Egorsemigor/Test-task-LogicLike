import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setCheckNavBarItem } from "../../store/horoscope-store/coursesSlice";
import { INavBarData } from "../../types/types";
import styles from "./NavBar.module.scss";

const NavBar = ({ data }: INavBarData) => {
  const dispatch = useAppDispatch();

  const checkNavBarItem = useAppSelector(
    (state) => state.courses.checkNavBarItem
  );

  return (
    <div className={styles.nav_bar}>
      {data.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => {
              dispatch(setCheckNavBarItem(item));
            }}
            className={
              checkNavBarItem === item
                ? styles.nav_bar_item_checked
                : styles.nav_bar_item
            }
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};
export default NavBar;
