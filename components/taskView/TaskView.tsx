import React from "react";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./TaskVIew.module.scss";
import { useRouter } from "next/router";

export default function TaskView({ tasks }) {
  const { container, taskBox } = styles;
  const router = useRouter();
  function handleClick(e) {
    console.log(e.target.id);
    const id = e.target.id;
    router.push(`/task/${id}`);
  }

  return (
    <>
      <main>
        <div className={container}>
          <section className={`${taskBox}`}>
            New
            <ul>
              {tasks &&
                tasks
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
              {tasks &&
                tasks
                  .filter((task) => task.status === "In Progress")
                  .map((task) => <li key={task._id}>{task.title}</li>)}
            </ul>
          </section>
          <section className={`${taskBox}`}>
            Completed
            <ul>
              {tasks &&
                tasks
                  .filter((task) => task.status === "Complete")
                  .map((task) => <li key={task._id}>{task.title}</li>)}
            </ul>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
