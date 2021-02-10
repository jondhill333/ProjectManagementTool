import React, { useState, useEffect, useContext } from "react";
import { ITask } from "../../models/Task";
import styles from "./TaskDisplay.module.scss";

export interface DisplayProps {
  task: ITask;
  currentProject: { id: string; title: string };
}

export default function TaskDisplay({ task, currentProject }: DisplayProps) {
  const { container, projectTitle, projectTaskNumber, taskTitle } = styles;
  let project = <span>{currentProject}</span>;
  return (
    <>
      <div data-test="container" className={container}>
        <div data-test="projectTitle" className={projectTitle}>
          {/* {props.testProject.title} */}
          {currentProject}
        </div>
        <span
          data-test="projectTaskNumber"
          className={projectTaskNumber}
        ></span>
        <div data-test="taskTitle" className={taskTitle}></div>
      </div>
    </>
  );
}
