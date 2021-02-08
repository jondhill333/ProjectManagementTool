import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import TaskView from "../../../components/taskView/TaskView";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import Link from "next/link";
import ProjectContext from "../../../util/ProjectContext";
import { IProject } from "../../../models/Project";
import ProjectCountContext from "../../../util/ProjectCountContext";

interface PageProps {
  project: IProject;
}

export default function TaskViewPage({ project }: PageProps) {
  const [currentProject, setCurrentProject] = useContext(ProjectContext);
  const [currentProjectCount, setCurrentProjectCount] = useContext(
    ProjectCountContext
  );
  const [tasks, setTasks] = useState([]);

  useEffect((): void => {
    setCurrentProject(project._id);
    function fetchData() {
      try {
        fetch("http://localhost:3000/api/tasks")
          .then((response) => response.json())
          .then((json) => setTasks(json.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function updateProjectCount() {
    setCurrentProjectCount(
      tasks.filter((task) => task.project === currentProject).length
    );
  }

  return (
    <>
      <div> this is my TaskView page in a dynamic route</div>
      <button onClick={updateProjectCount}>
        <Link href="/task/new">
          <a>Create new Task</a>
        </Link>
      </button>
      <TaskView tasks={tasks} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const allProjectData = await getProjectData(context.params.id);

  return {
    props: {
      project: allProjectData.data,
    },
  };
};
