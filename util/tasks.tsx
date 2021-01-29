export async function getAllIds() {
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

export async function getTaskData(id) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const taskData = await res.json();

  return {
    id,
    ...taskData,
  };
}
