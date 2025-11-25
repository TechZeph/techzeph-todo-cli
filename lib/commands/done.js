import { loadJSON, saveJSON } from "../utils/fs-utils.js";

export default async function markDone(project, index) {
  const data = loadJSON(project.todoPath);
  const i = parseInt(index) - 1;

  if (!data.tasks[i]) return console.error("Invalid task number.");

  data.tasks[i].done = true;

  saveJSON(project.todoPath, data);

  console.log(`Marked task ${index} as DONE.`);
}
