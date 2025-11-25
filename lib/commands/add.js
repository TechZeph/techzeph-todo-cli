import { loadJSON, saveJSON } from "../utils/fs-utils.js";

export default async function addTask(project, taskText) {
  if (!taskText) {
    console.error("Usage: todo add \"task description\"");
    return;
  }

  const data = loadJSON(project.todoPath);

  data.tasks.push({
    task: taskText,
    done: false
  });

  saveJSON(project.todoPath, data);

  console.log("Task added:", taskText);
}
