import Head from "next/head";
import React, { useContext } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getAllTaskIds } from "../../util/getAllEntries";
import { getTaskData } from "../../util/getAllEntries";
import EditAnEntry from "../../components/editModal/EditAnEntry";

export default function EditTask({ allTaskData }) {
  const task = allTaskData.data;
  return (
    <>
      <div> Update page</div>
      <EditAnEntry task={task}></EditAnEntry>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllTaskIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allTaskData = await getTaskData(params.id);

  return {
    props: {
      allTaskData,
    },
  };
}
