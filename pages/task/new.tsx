import Head from "next/head";
import React from "react";
import styles from "./new.module.scss";
import CreateAnEntry from "../../components/createModal/CreateAnEntry";

export default function New() {
  const {} = styles;

  return (
    <>
      <div> New Task page</div>
      <CreateAnEntry />
    </>
  );
}
