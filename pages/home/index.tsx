import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { IProject } from "../../models/Project";
import { NextApiRequest, NextApiResponse } from "next";

interface PageProps {
  projects: IProject[];
}

export default function LandingPage({ projects }: PageProps) {
  const { container, projectsContainer } = styles;
  const router = useRouter();

  function handleClick(e) {
    const id: string = e.target.id;
    router.push(`/project/${id}/taskview`);
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
        <ul className={projectsContainer}>
          {projects.map((project) => (
            <li key={project._id}>
              <button
                className={project}
                onClick={handleClick}
                id={project._id}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  const projectsData: NextApiResponse = await res.json();

  return {
    props: {
      projects: projectsData.data,
    },
  };
};
