import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import TaskView from "../../../components/taskView/TaskView";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import Link from "next/link";
import ProjectContext from "../../../util/ProjectContext";

export default function TaskViewPage({ allProjectData }) {
  const [project, setProject] = useContext(ProjectContext);

  useEffect(() => {
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
