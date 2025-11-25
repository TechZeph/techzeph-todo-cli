#!/usr/bin/env node
import { locateProject } from './utils/project-locator.js';
import addTask from './commands/add.js';
import listTasks from './commands/list.js';
import markDone from './commands/done.js';
import markUndone from './commands/undone.js';
import showProgress from './commands/progress.js';
import showHelp from './commands/help.js';

const args = process.argv.slice(2);
const command = args[0];
const rest = args.slice(1);

// Locate the project by scanning for todo.json
const project = await locateProject();
if (!project) {
  console.error("Error: No todo.json found in this directory or its parents.");
  process.exit(1);
}

switch (command) {
  case "add":
    await addTask(project, rest.join(" "));
    break;

  case "list":
    await listTasks(project);
    break;

  case "done":
    await markDone(project, rest[0]);
    break;

  case "undone":
    await markUndone(project, rest[0]);
    break;

  case "progress":
    await showProgress(project);
    break;

  default:
    showHelp();
}
