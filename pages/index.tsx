import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import TaskViewSection from "../components/TaskViewSection/TaskViewSection";
import styles from "./index.module.scss";

export const TaskContext = React.createContext([]);

export default function Home({ tasks }) {
  const { container, taskBox } = styles;
  const newTasks = tasks.filter((task) => task.status === "New");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completeTasks = tasks.filter((task) => task.status === "Complete");
  return (
    <>
      <Head>
        <title>Project Management Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TaskContext.Provider value={tasks}>
        <main>
          <div className={container}>
            <section className={`${taskBox}`}>New</section>
            <section className={`${taskBox}`}>In Porgress</section>
            <section className={`${taskBox}`}>Completed</section>
          </div>
          {/* <TaskViewSection />
          <TaskViewSection />
          <TaskViewSection /> */}
        </main>
        <footer></footer>
      </TaskContext.Provider>
    </>
  );
}

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = await res.json();

  return {
    props: {
      tasks: data,
    },
  };
};
