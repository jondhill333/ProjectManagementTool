import Head from "next/head";
import React from "react";
import styles from "./new.module.scss";
// import { useRouter } from "next/router";
import CreateTaskModal from "../../components/taskModals/create/CreateTaskModal";

export default function New() {
  const {} = styles;

  return (
    <>
      <div> New Task page</div>
      <CreateTaskModal />
    </>
  );
}
