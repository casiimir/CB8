import CardMovie from "../cardMovie";
import styles from "./index.module.css";

const CardList = ({ moviesList, setUpdate }) => {
  return (
    <div className={styles.CardList}>
      <h3>Movies List</h3>
      <div className={styles.list}>
        {moviesList.map((movie) => (
          <CardMovie movieData={movie} key={movie.id} setUpdate={setUpdate} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
