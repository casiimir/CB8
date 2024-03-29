import { useState, useEffect } from "react";
import CardList from "@/components/cardList";
import Head from "next/head";
import AddMovie from "@/components/addMovie";
import { HTTP_GET } from "../utils/http";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log(update);
    HTTP_GET("/movies").then((data) => setMovies(data));
  }, [update]);

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardList moviesList={movies} setUpdate={setUpdate} />
        <AddMovie setUpdate={setUpdate} />
        <button onClick={() => console.log(update)}>Clicca</button>
      </main>
    </>
  );
}
