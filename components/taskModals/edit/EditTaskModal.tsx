import React, { useState } from "react";
import styles from "./EditTaskModal.module.scss";
import { useRouter } from "next/router";

export default function EditTaskModal({ task }) {
  const { radioButtons } = styles;
  let correctlyFormattedDate = [];
  task.estimatedDueDate
    .substring(0, 10)
    .split("-")
    .map((item) => {
      correctlyFormattedDate.push(item + "-");
      return correctlyFormattedDate;
    });

  let formattedEstimatedDueDate = correctlyFormattedDate
    .join("")
    .substring(0, 10);

  // .reverse().join(""));
  const { container, taskForm } = styles;
  const [form, setForm] = useState({
    title: task.title,
    description: task.description,
    estimatedDueDate: formattedEstimatedDueDate,
    status: task.status,
  });
  const router = useRouter();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask();
  }

  async function editTask() {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
        method: "PUT",
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
  return (
    <>
      <main className={container}>
        <form onSubmit={handleSubmit} className={taskForm}>
          <label htmlFor="title">Task title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title of the task"
            onChange={handleChange}
            value={form.title}
            required
          />
          <label htmlFor="description">Task description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="40"
            placeholder="Write a comment..."
            value={form.description}
            onChange={handleChange}
            required
          />
          <label htmlFor="estimatedDueDate">Estimated due date</label>
          <input
            type="date"
            id="estimatedDueDate"
            name="estimatedDueDate"
            placeholder="Enter a date to help build your visusal timeline"
            value={form.estimatedDueDate}
            onChange={handleChange}
          />
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
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}
