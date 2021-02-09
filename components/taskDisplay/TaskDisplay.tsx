import React, { useState, useEffect, useContext } from "react";
import styles from "./TaskDisplay.module.scss";
// import { useRouter } from "next/router";
// import ProjectContext from "../../util/ProjectContext";
// import { ProjectCountContext } from "../../util/ProjectCountContext";

export default function TaskDisplay() {
  const { container, projectTitle, projectTaskNumber, taskTitle } = styles;
  return (
    <>
      <div data-test="container" className={container}>
        <div data-test="projectTitle" className={projectTitle}></div>
        <span
          data-test="projectTaskNumber"
          className={projectTaskNumber}
        ></span>
        <div data-test="taskTitle" className={taskTitle}></div>
      </div>
    </>
  );
}
