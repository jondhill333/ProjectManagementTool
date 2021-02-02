import Head from "next/head";
import React from "react";
// import styles from "./new.module.scss";
import CreateAnEntry from "../../components/createAnEntry/CreateAnEntry";

export default function NewProjectPage() {
  //   const { container } = styles;

  return (
    <>
      <div>new Project page</div>
      <CreateAnEntry />
    </>
  );
}
