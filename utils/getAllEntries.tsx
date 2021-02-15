import { NextApiRequest, NextApiResponse } from "next";

export async function getAllTaskIds() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const { data } = await res.json();

  return data.map((task) => {
    return {
      params: {
        id: task._id,
      },
    };
  });
}

export async function getTaskData(id: string) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const taskData: NextApiResponse = await res.json();

  return {
    id,
    ...taskData,
  };
}

export async function getAllProjectIds() {
  const res = await fetch("http://localhost:3000/api/projects");
  const { data } = await res.json();

  return data.map((project) => {
    return {
      params: {
        id: project._id,
      },
    };
  });
}

export async function getProjectData(id) {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`);
  const taskData: NextApiResponse = await res.json();

  return {
    id,
    ...taskData,
  };
}
