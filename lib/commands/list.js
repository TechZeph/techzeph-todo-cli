import { loadJSON } from "../utils/fs-utils.js";

export default async function listTasks(project) {
  const data = loadJSON(project.todoPath);

  console.log(`\nTasks for ${data.project}:\n`);
  data.tasks.forEach((t, i) => {
    console.log(`${i + 1}. ${t.done ? "✓" : " "} ${t.task}`);
  });
  console.log("");
}
