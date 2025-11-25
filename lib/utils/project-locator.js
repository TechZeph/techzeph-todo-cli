import fs from "fs";
import path from "path";

export async function locateProject() {
  let dir = process.cwd();

  while (true) {
    const todoPath = path.join(dir, "todo.json");
    if (fs.existsSync(todoPath)) {
      return {
        root: dir,
        todoPath
      };
    }

    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}
