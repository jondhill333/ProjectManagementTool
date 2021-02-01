import Head from "next/head";
import React from "react";
import { getAllProjectIds, getProjectData } from "../../util/getAllEntries";
import AllActionModal from "../../components/allActionModal/AllActionModal";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export default function EditProject({ allProjectData }) {
  const project = allProjectData.data;
  //   console.log(allProjectData);
  //   const { container } = styles;

  return (
    <>
      <div>Edit project page</div>
      <AllActionModal project={project}></AllActionModal>
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
