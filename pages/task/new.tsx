import Head from "next/head";
import React from "react";
import styles from "./new.module.scss";
import CreateModal from "../../components/createModal/CreateModal";

export default function New() {
  const {} = styles;

  return (
    <>
      <div> New Task page</div>
      <CreateModal />
    </>
  );
}
