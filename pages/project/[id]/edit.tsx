import Head from "next/head";
import React from "react";
import { getAllProjectIds, getProjectData } from "../../../util/getAllEntries";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import EditAnEntry from "../../../components/editModal/EditAnEntry";

export default function EditProject({ allProjectData }) {
  const project = allProjectData.data;
  //   const { container } = styles;

  return (
    <>
      <div>Edit project page</div>
      <EditAnEntry project={project}></EditAnEntry>
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
