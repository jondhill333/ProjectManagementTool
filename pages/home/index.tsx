import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

export const TaskContext = React.createContext([]);

export default function Home({ tasks }) {
  const { container, taskBox } = styles;
  const router = useRouter();
  function handleClick(e) {
    const id = e.target.id;
    router.push(`/task/${id}`);
  }
  return (
    <>
      <Head>
        <title>Project Management Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TaskContext.Provider value={tasks}>
        {/* <UpdatePage /> */}
        <main>
          <div className={container}>
            <section className={`${taskBox}`}>
              New
              <ul>
                {tasks
                  .filter((task) => task.status === "New")
                  .map((task) => (
                    <li key={task._id}>
                      <button onClick={handleClick} id={task._id}>
                        {task.title}
                      </button>
                    </li>
                  ))}
              </ul>
            </section>
            <section className={`${taskBox}`}>
              In Progress
              <ul>
                {tasks
                  .filter((task) => task.status === "In Progress")
                  .map((task) => (
                    <li key={task._id}>{task.title}</li>
                  ))}
              </ul>
            </section>
            <section className={`${taskBox}`}>
              Completed
              <ul>
                {tasks
                  .filter((task) => task.status === "Complete")
                  .map((task) => (
                    <li key={task._id}>{task.title}</li>
                  ))}
              </ul>
            </section>
          </div>
        </main>
        <footer></footer>
      </TaskContext.Provider>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (params) => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = await res.json();

  return {
    props: {
      tasks: data,
    },
  };
};
