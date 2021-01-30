import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./CreateProject.module.scss";
import { useRouter } from "next/router";

// export const TaskContext = React.createContext([]);

export default function CreateProject() {
  const { container } = styles;

  return (
    <>
      <div className={container}>create project component</div>
    </>
  );
}
