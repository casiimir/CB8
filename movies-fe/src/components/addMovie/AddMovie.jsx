import { useState } from "react";
import { HTTP_POST } from "@/utils/http";
import styles from "./index.module.css";

const AddMovie = ({ setUpdate }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [cover, setCover] = useState("");

  const onHandleAddMovie = (e) => {
    e.preventDefault();

    HTTP_POST("/movies", {
      id: Math.floor(Math.random() * new Date()),
      title,
      year,
      poster,
      cover,
    });

    setUpdate(100);
  };

  return (
    <div className={styles.AddMovie}>
      <h2>Aggiungi film</h2>

      <form onSubmit={onHandleAddMovie}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="date"
          placeholder="year"
        />
        <input
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          type="text"
          placeholder="cover"
        />
        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          placeholder="poster"
        />
        <input type="submit" value="Aggungi" />
      </form>
      {poster && <img src={poster} alt={title || "pippo"} />}
    </div>
  );
};

export default AddMovie;
