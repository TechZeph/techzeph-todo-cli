✔ CLEAN README.md (Fully Copy/Paste Safe)

Paste this directly into README.md in your repository:

TechZeph TODO CLI

A lightweight, cross-platform command-line tool for managing project task lists stored in todo.json files.

This tool integrates directly with the TechZeph Portfolio Terminal.
Whenever you update your TODO tasks locally and push them to GitHub, your public portfolio site automatically updates its project progress indicators.

Features

Auto-detects the nearest todo.json in the directory tree

Add new tasks from the command line

Mark tasks as done or undone

List all tasks with completion status

Display a clean ASCII progress bar

Simple JSON structure for easy version control

Fully compatible with the project progress feature on your portfolio site

Installation
1. Clone the repository
git clone https://github.com/TechZeph/techzeph-todo-cli
cd techzeph-todo-cli

2. Install dependencies
npm install

3. Make the CLI executable (Git Bash / macOS / Linux only)
chmod +x bin/todo

4. Link the CLI tool globally

This makes the todo command available anywhere on your system.

npm link

Project Requirements

Any project you want to track must contain a todo.json file at the project root.
Example:

{
  "project": "Media Bias Monitor",
  "description": "A tool analysing political bias and media framing trends.",
  "tasks": [
    { "task": "Initial project setup", "done": true },
    { "task": "Build user interface", "done": false }
  ]
}


The CLI will automatically detect this file when run inside the project folder (or any subfolder within it).

Usage

Run these commands inside any project folder containing a todo.json file.

List all tasks
todo list

Add a new task
todo add "Write classification engine"

Mark a task as done
todo done 3

Mark a task as not done
todo undone 2

Show project progress
todo progress

Updating the Website

After modifying tasks with the CLI tool, commit and push your changes:

git add todo.json
git commit -m "Update TODO"
git push


Your portfolio’s terminal interface will automatically reflect the new progress level.

Roadmap

Planned enhancements include:

Auto-sync (git add, git commit, git push)

Colour-enhanced progress bars

Interactive mode (arrow-key selection of tasks)

Task categories and grouping

Global configuration support

Project template generation

License

MIT License

Author

TechZeph
GitHub: https://github.com/TechZeph

Portfolio: https://techzeph.github.io