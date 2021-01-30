import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
// import styles from "./index.module.scss";
import { useRouter } from "next/router";
import CreateProject from "../../components/createProject/CreateProject";

// export const TaskContext = React.createContext([]);

export default function NewProjectPage() {
  //   const { container } = styles;

  return (
    <>
      <div>new Project page</div>
      <CreateProject />
    </>
  );
}
