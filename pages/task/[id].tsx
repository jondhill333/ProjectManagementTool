import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { getAllTaskIds } from "../../util/getAllEntries";
import { getTaskData } from "../../util/getAllEntries";
import EditAnEntry from "../../components/editModal/EditAnEntry";
import Task from "../../models/Task";

interface PageProps {
  task: typeof Task;
}

export default function EditTask({ task }: PageProps) {
  return (
    <>
      <div> Update page</div>
      <EditAnEntry task={task}></EditAnEntry>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTaskIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const allTaskData = await getTaskData(context.params.id);

  return {
    props: {
      task: allTaskData.data,
    },
  };
};
