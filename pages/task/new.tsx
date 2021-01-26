import Head from "next/head";
import React, { useState } from "react";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import styles from "./new.module.scss";

export default function NewTask() {
  const { container, taskForm } = styles;
  const [form, setForm] = useState({
    title: "",
    description: "",
    estimatedDueDate: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTask();
  }

  async function createTask() {
    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className={container}>
        <div> New Task page</div>
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
          ></textarea>
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
