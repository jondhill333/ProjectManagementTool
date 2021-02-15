import React, { useContext, useEffect, useState } from "react";
import styles from "./TaskVIew.module.scss";
import { useRouter } from "next/router";
import ProjectContext from "../../util/ProjectContext";
import { ITask } from "../../models/Task";
import Link from "next/link";
import ProjectCountContext from "../../util/ProjectCountContext";
import TaskDisplay from "../taskDisplay/TaskDisplay";

interface ComponentProps {
  tasks: ITask[];
}

export default function TaskView({ tasks }: ComponentProps) {
  const [currentProject, setCurrentProject] = useContext(ProjectContext);
  const { container, taskBox } = styles;
  console.log(currentProject);

  const [currentProjectCount, setCurrentProjectCount] = useContext(
    ProjectCountContext
  );

  useEffect((): void => {
    setCurrentProjectCount(
      tasks.filter((task) => task.project === currentProject.id).length
    );
  });

  const newTaks = tasks
    .filter((task) => task.project === currentProject.id)
    .filter((task) => task.status === "New");

  const inProgressTasks = tasks
    .filter((task) => task.project === currentProject.id)
    .filter((task) => task.status === "In Progress");

  const completedTasks = tasks
    .filter((task) => task.project === currentProject.id)
    .filter((task) => task.status === "Complete");

  return (
    <>
      <main>
        {currentProject.title}
        <br></br>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <div className={container}>
          <section className={`${taskBox}`}>
            New
            {newTaks &&
              newTaks.map((task) => (
                <TaskDisplay
                  key={task._id}
                  currentProjectTitle={currentProject.title}
                  task={task}
                />
              ))}
          </section>
          <section className={`${taskBox}`}>
            In Progress
            {inProgressTasks &&
              inProgressTasks.map((task) => (
                <TaskDisplay
                  key={task._id}
                  currentProjectTitle={currentProject.title}
                  task={task}
                />
              ))}
          </section>
          <section className={`${taskBox}`}>
            Completed
            {/* <ul> */}
            {completedTasks &&
              completedTasks.map((task) => (
                <TaskDisplay
                  key={task._id}
                  currentProjectTitle={currentProject.title}
                  task={task}
                />
              ))}
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
