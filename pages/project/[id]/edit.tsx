import Head from "next/head";
import React from "react";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import EditAnEntry from "../../../components/editModal/EditAnEntry";
import { IProject } from "../../../models/Project";

interface PageProps {
  project: IProject;
}

export default function EditProject({ project }: PageProps) {
  return (
    <>
      <div>Edit project page</div>
      <EditAnEntry project={project}></EditAnEntry>
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
