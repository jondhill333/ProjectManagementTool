import React, { useState, useEffect } from "react";
import styles from "./AllActionModal.module.scss";
import { useRouter } from "next/router";
import handleDate from "../../util/handleDate";

export default function AllActionModal({ task }) {
  let correctlyFormattedDate = [];
  let formattedEstimatedDueDate;
  if (task) {
    task.estimatedDueDate
      .substring(0, 10)
      .split("-")
      .map((item) => {
        correctlyFormattedDate.push(item + "-");
        return correctlyFormattedDate;
      });

    formattedEstimatedDueDate = correctlyFormattedDate
      .join("")
      .substring(0, 10);
    // return formattedEstimatedDueDate;
  }

  const { container, taskForm, radioButtons } = styles;

  // const [formattedEstimatedDueDate, setFormattedEstimatedDueDate] = useState(
  //   ""
  // );
  const [entryType, setEntryType] = useState("");
  const [actionType, setActionType] = useState("");

  const [form, setForm] = useState({
    title: task ? task.title : "",
    description: task ? task.description : "",
    estimatedDueDate: formattedEstimatedDueDate
      ? formattedEstimatedDueDate
      : "",
    status: task ? task.status : "New",
  });

  const router = useRouter();
  let path = router.pathname;

  useEffect(() => {
    handleEntryType();
    handleActionType();
    // if (task) {
    // setFormattedEstimatedDueDate(handleDate(task));
    // }
  }, []);

  function handleEntryType() {
    if (path.charAt(1) === "t") {
      setEntryType("tasks");
    } else if (path.charAt(1) === "p") {
      setEntryType("projects");
    } else {
      setEntryType("epics");
    }
  }

  function handleActionType() {
    if (path.length < 10) {
      setActionType("create");
    } else if (path.charAt(1) === "p" && path.length < 13) {
      setActionType("create");
    } else {
      setActionType("edit");
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (actionType === "create") {
      create();
    } else {
      edit();
    }
  }

  async function create() {
    try {
      const res = await fetch(`http://localhost:3000/api/${entryType}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  }
  async function edit() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/${entryType}/${task._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push("/home");
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
            placeholder="Title of the task"
            value={form.title}
            onChange={handleChange}
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
          <label htmlFor="estimatedDueDate">Estimated due date</label>
          <input
            type="date"
            id="estimatedDueDate"
            name="estimatedDueDate"
            placeholder="Enter a date to help build your visusal timeline"
            onChange={handleChange}
            value={form.estimatedDueDate}
          />
          {actionType === "edit" && (
            <div className={radioButtons}>
              <input
                type="radio"
                id="new"
                name="status"
                value="New"
                onChange={handleChange}
              />
              <label htmlFor="new">New</label>
              <input
                type="radio"
                id="In Progress"
                name="status"
                value="In Progress"
                onChange={handleChange}
              />
              <label htmlFor="in-progress">In Progress</label>
              <input
                type="radio"
                id="complete"
                name="status"
                value="Complete"
                onChange={handleChange}
              />
              <label htmlFor="complete">Complete</label>
            </div>
          )}
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}
