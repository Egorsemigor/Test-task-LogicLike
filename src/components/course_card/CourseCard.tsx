import { ICourseCard } from "../../types/types";
import styles from "./CourseCard.module.scss";
const CourseCard = ({ name, bgColor, image }: ICourseCard) => {
  return (
    <div className={styles.course_card}>
      <div
        className={styles.image_container}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.name_container}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};
export default CourseCard;
