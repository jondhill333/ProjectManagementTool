import React, { useState, useEffect } from "react";
import styles from "./EditAnEntry.module.scss";
import { useRouter } from "next/router";
import { IEpic } from "../../models/Epic";
import { IProject } from "../../models/Project";
import { ITask } from "../../models/Task";

interface ComponentProps {
  task: ITask;
  project: IProject;
  epic: IEpic;
}

export default function EditAnEntry({ project, epic, task }: ComponentProps) {
  const { container, taskForm } = styles;

  let entry = project || epic || task;

  let correctlyFormattedDate: string[] = [];
  let formattedEndDate: string = "";

  const [entryType, setEntryType] = useState("");

  const router = useRouter();
  let path: string = router.pathname;

  if (entry && entry.endDate) {
    entry.endDate
      .substring(0, 10)
      .split("-")
      .map((item) => {
        correctlyFormattedDate.push(item + "-");
        return correctlyFormattedDate;
      });

    formattedEndDate = correctlyFormattedDate.join("").substring(0, 10);
  }

  function handleEntryType(): void {
    if (path.charAt(1) === "t") {
      setEntryType("tasks");
    } else if (path.charAt(1) === "p") {
      setEntryType("projects");
    } else {
      setEntryType("epics");
    }
  }

  useEffect((): void => {
    handleEntryType();
  }, []);

  const [form, setForm] = useState({
    id: entry._id,
    title: entry.title,
    description: entry.description,
    endDate: formattedEndDate,
    status: entry.status,
    project: entry.project,
  });

  function handleChange(e): void {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e): void {
    e.preventDefault();
    edit();
  }

  async function edit() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/${entryType}/${form.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push(`/project/${form.project}/taskview`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className={container}>
        <form onSubmit={handleSubmit} className={taskForm}>
          <label htmlFor="title">
            {entryType.charAt(0).toUpperCase()}
            {entryType.slice(1, -1)} title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder={`Title of the ${entryType.slice(0, -1)}`}
            onChange={handleChange}
            value={form.title}
            required
          />
          <label htmlFor="description">
            {" "}
            {entryType.charAt(0).toUpperCase()}
            {entryType.slice(1, -1)} description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="40"
            placeholder="Write a comment..."
            onChange={handleChange}
            value={form.description}
            required
          />
          <label htmlFor="endDate">Estimated due date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            placeholder="Enter a date to help build your visusal timeline"
            onChange={handleChange}
            value={form.endDate}
          />
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}
