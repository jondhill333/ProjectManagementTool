import React, { useContext, useEffect, useState } from "react";
import styles from "./TaskVIew.module.scss";
import { useRouter } from "next/router";
import ProjectContext from "../../util/ProjectContext";
import { ITask } from "../../models/Task";
import Link from "next/link";
import ProjectCountContext from "../../util/ProjectCountContext";

interface ComponentProps {
  tasks: ITask[];
}

export default function TaskView({ tasks }: ComponentProps) {
  const [currentProject, setCurrentProject] = useContext(ProjectContext);
  const { container, taskBox } = styles;
  const router = useRouter();

  function handleClick(e): void {
    const id: string = e.target.id;
    router.push(`/task/${id}`);
  }

  return (
    <>
      <main>
        {currentProject}
        <br></br>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <div className={container}>
          <section className={`${taskBox}`}>
            New
            <ul>
              {tasks &&
                tasks
                  .filter((task) => task.project === currentProject)
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
                  .filter((task) => task.project === currentProject)
                  .filter((task) => task.status === "In Progress")
                  .map((task) => <li key={task._id}>{task.title}</li>)}
            </ul>
          </section>
          <section className={`${taskBox}`}>
            Completed
            <ul>
              {tasks &&
                tasks
                  .filter((task) => task.project === currentProject)
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
