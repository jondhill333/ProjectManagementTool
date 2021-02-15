import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { ITask } from "../../models/Task";
import styles from "./TaskDisplay.module.scss";

export interface DisplayProps {
  task: ITask;
  currentProjectTitle: string;
}

export default function TaskDisplay({
  task,
  currentProjectTitle,
}: DisplayProps) {
  const { container, projectTitle, projectTaskNumber, taskTitle } = styles;

  const router = useRouter();

  function handleClick(e): void {
    router.push(`/task/${task._id}`);
  }

  return (
    <>
      <div data-test="container" className={container} onClick={handleClick}>
        <div data-test="projectTitle" className={projectTitle}>
          {currentProjectTitle}
        </div>
        {task.taskNumber ? (
          <span data-test="projectTaskNumber" className={projectTaskNumber}>
            {" "}
            &#35;
            {task.taskNumber}{" "}
          </span>
        ) : (
          <span></span>
        )}

        <div data-test="taskTitle" className={taskTitle}>
          {task.title}
        </div>
      </div>
    </>
  );
}
