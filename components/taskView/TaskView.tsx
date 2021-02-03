import React, { useContext, useEffect, useState } from "react";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./TaskVIew.module.scss";
import { useRouter } from "next/router";
import ProjectContext from "../../util/ProjectContext";

export default function TaskView({ tasks }) {
  const [currentProject, setCurrentProject] = useContext(ProjectContext);
  const [projectTasks, setProjectTasks] = useState([]);
  const { container, taskBox } = styles;
  const router = useRouter();
  console.log(currentProject);

  useEffect(() => {
    // async function getAlltasks() {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((json) => setProjectTasks(json.data));
  }, []);

  function handleClick(e) {
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
              {projectTasks &&
                projectTasks
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
              {projectTasks &&
                projectTasks
                  .filter((task) => task.project === currentProject)
                  .filter((task) => task.status === "In Progress")
                  .map((task) => <li key={task._id}>{task.title}</li>)}
            </ul>
          </section>
          <section className={`${taskBox}`}>
            Completed
            <ul>
              {projectTasks &&
                projectTasks
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
