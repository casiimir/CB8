import { memo } from "react";
import { HTTP_DELETE } from "@/utils/http";
import styles from "./index.module.css";

const CardMovie = ({ movieData, setUpdate }) => {
  const { title, cover, id } = movieData;

  const onHandleDelete = () => {
    HTTP_DELETE("/movies", id);
    setUpdate((prev) => !prev);
  };

  return (
    <div className={styles.CardMovie}>
      <img src={cover} alt={title} />
      <button onClick={onHandleDelete} className={styles.delBtn}>
        X
      </button>
    </div>
  );
};

export default memo(CardMovie);
