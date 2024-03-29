import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

// SERVER
// export const getServerSideProps = async (context) => {
//   // console.log(context);
//   const month = context.query.month;

//   const getMyPerfectToday = `${new Date().getDay()} / ${new Date().getMonth()} / ${new Date().getFullYear()} - ${
//     month || ""
//   }`;

//   const res = await fetch(`api/todos`);
//   const data = await res.json();

//   return {
//     props: {
//       data: data.todos,
//       date: getMyPerfectToday,
//     },
//   };
// };

// CLIENT
export default function Home({ data, date }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Prodotti</h1>
        {todos.map((todo) => (
          <pre key={todo.id}>{todo.content}</pre>
        ))}

        {/* {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.price}$</p>
          </div>
        ))} */}
      </main>
    </>
  );
}
