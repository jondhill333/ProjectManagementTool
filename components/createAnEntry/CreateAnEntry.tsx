import React, { useState, useEffect, useContext } from "react";
import styles from "./CreateAnEntry.module.scss";
import { useRouter } from "next/router";
import ProjectContext from "../../util/ProjectContext";

export default function CreateAnEntry() {
  const [project, setProject] = useContext(ProjectContext);
  const { container, taskForm } = styles;

  const [entryType, setEntryType] = useState("");

  function handleEntryType() {
    if (path.charAt(1) === "t") {
      setEntryType("tasks");
    } else if (path.charAt(1) === "p") {
      setEntryType("projects");
    } else {
      setEntryType("epics");
    }
  }

  useEffect(() => {
    handleEntryType();
  }, []);

  const [form, setForm] = useState({
    title: "",
    description: "",
    endDate: "",
    status: "New",
  });

  const router = useRouter();
  let path = router.pathname;

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
            required
          />
          <label htmlFor="endDate">Estimated due date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            placeholder="Enter a date to help build your visusal timeline"
            onChange={handleChange}
          />
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </>
  );
}
