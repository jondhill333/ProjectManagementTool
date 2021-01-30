import Head from "next/head";
import React, { useContext } from "react";
// import { TaskContext } from "../home/index";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getAllIds } from "../../util/tasks";
import { getTaskData } from "../../util/tasks";
// import EditTaskModal from "../../components/taskModals/edit/EditTaskModal";
import AllActionModal from "../../components/allActionModal/AllActionModal";
// import styles from "./new.module.scss";
// import { useRouter } from "next/router";
// import TaskModal from "../components/taskModal/TaskModal";

export default function EditTask({ allTaskData }) {
  const task = allTaskData.data;
  return (
    <>
      <div> Update page</div>
      <AllActionModal task={task}></AllActionModal>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllIds();

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
