import React, { useState, useEffect } from "react";
import styles from "./CreateModal.module.scss";
import { useRouter } from "next/router";

export default function CreateModal() {
  const { container, taskForm, radioButtons } = styles;
  const [form, setForm] = useState({
    title: "",
    description: "",
    estimatedDueDate: "",
  });
  const [type, setType] = useState("");

  const router = useRouter();
  let path = router.pathname;

  useEffect(() => {
    if (path.charAt(1) === "t") {
      setType("task");
    } else if (path.charAt(1) === "p") {
      setType("project");
    } else {
      setType("epic");
    }
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    create();
  }

  async function create() {
    try {
      const res = await fetch(`http://localhost:3000/api/${type}`, {
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
            required
          />
          <label htmlFor="description">Task description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="40"
            placeholder="Write a comment..."
            onChange={handleChange}
            required
          />
          <label htmlFor="estimatedDueDate">Estimated due date</label>
          <input
            type="date"
            id="estimatedDueDate"
            name="estimatedDueDate"
            placeholder="Enter a date to help build your visusal timeline"
            onChange={handleChange}
          />
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}
