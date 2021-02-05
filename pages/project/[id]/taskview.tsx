import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import TaskView from "../../../components/taskView/TaskView";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import Link from "next/link";
import ProjectContext from "../../../util/ProjectContext";
import Project from "../../../models/Project";

interface PageProps {
  project: typeof Project;
}

export default function TaskViewPage({ project }: PageProps) {
  const [currentProject, setCurrentProject] = useContext(ProjectContext);

  useEffect((): void => {
    setCurrentProject(project._id);
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
