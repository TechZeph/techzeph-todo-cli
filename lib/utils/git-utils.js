import { execSync } from "child_process";

export function autoCommit(message = "Update TODO list") {
  try {
    execSync("git add .");
    execSync(`git commit -m "${message}"`);
    execSync("git push");
    console.log("Synced with GitHub.");
  } catch (err) {
    console.warn("Git auto-commit failed. You may need to commit manually.");
  }
}
