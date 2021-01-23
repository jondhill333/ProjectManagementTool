import Head from "next/head";
import Title from "../components/title";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ movies }) {
  const { year, released, cast } = movies[0];

  return (
    <>
      <Title released={released} year={year} cast={cast} />
      <Head>
        <title>Project Management Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )} */}

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <footer></footer>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
// const { client } = await connectToDatabase();

// const isConnected = await client.isConnected();

// return {
//   props: { isConnected },
// };
