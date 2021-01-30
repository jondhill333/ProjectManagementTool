import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

// export const TaskContext = React.createContext([]);

export default function LandingPage() {
  const { container } = styles;
  const router = useRouter();

  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <div>new landing page</div>
      <div className={container}>
        <button onClick={handleClick}>
          <Link href="/project/new">
            <a>Create Project</a>
          </Link>{" "}
        </button>
      </div>
    </>
  );
}
