import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { getAllTaskIds } from "../../utils/getAllEntries";
import { getTaskData } from "../../utils/getAllEntries";
import EditAnEntry from "../../components/editModal/EditAnEntry";
import { ITask } from "../../models/Task";

interface PageProps {
  task: ITask;
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
