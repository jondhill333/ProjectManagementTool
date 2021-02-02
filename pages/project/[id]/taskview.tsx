import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import TaskView from "../../../components/taskView/TaskView";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import { useRouter } from "next/router";
import Link from "next/link";
import ProjectContext from "../../../util/ProjectContext";

export default function TaskViewPage({ allProjectData }) {
  const [project, setProject] = useContext(ProjectContext);
  const router = useRouter();

  const projectId = router.asPath.split("/")[2];

  useEffect(() => {
    async function getAlltasks() {
      const res = await fetch("http://localhost:3000/api/tasks");
      const { data } = await res.json();

      //TODO write logic to match the tasks with the appropriate project id in the tasks project property
    }
    getAlltasks();
    setProject(allProjectData.id);
  }, []);

  return (
    <>
      <div> this is my TaskView page in a dynamic route</div>
      <button>
        <Link href="/task/new">
          <a>Create new Task</a>
        </Link>
      </button>
      <TaskView />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allProjectData = await getProjectData(params.id);

  return {
    props: {
      allProjectData,
    },
  };
}
