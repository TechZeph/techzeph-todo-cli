import { loadJSON } from "../utils/fs-utils.js";

export default async function showProgress(project) {
  const data = loadJSON(project.todoPath);

  const total = data.tasks.length;
  const completed = data.tasks.filter(t => t.done).length;
  const percent = Math.round((completed / total) * 100);

  const barLength = 20;
  const filled = Math.round((percent / 100) * barLength);
  const bar = `[${"█".repeat(filled)}${"-".repeat(barLength - filled)}]`;

  console.log(`\n${data.project}\n`);
  console.log(`${data.description}\n`);
  console.log(`Progress: ${percent}%`);
  console.log(bar + "\n");
}
