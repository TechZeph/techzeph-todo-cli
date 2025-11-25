import { loadJSON, saveJSON } from "../utils/fs-utils.js";

export default async function markUndone(project, index) {
  const data = loadJSON(project.todoPath);
  const i = parseInt(index) - 1;

  if (!data.tasks[i]) return console.error("Invalid task number.");

  data.tasks[i].done = false;

  saveJSON(project.todoPath, data);

  console.log(`Marked task ${index} as NOT DONE.`);
}
