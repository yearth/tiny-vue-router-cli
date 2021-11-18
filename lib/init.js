import { promisify } from "util";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";
import clone from "./download.js";

const asyncFiglet = promisify(figlet);
const log = content => console.log(chalk.green(content));

export default async name => {
  clear();
  const welcome = await asyncFiglet(`Welcome`);
  log(welcome);
  log("创建项目: " + name);
  clone("github:su37josephxia/vue-template", name);
};
