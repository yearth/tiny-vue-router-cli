import { promisify } from "util";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";

const asyncFiglet = promisify(figlet);
const log = content => console.log(chalk.green(content));

export default async name => {
  clear();
  const welcome = await asyncFiglet(`Welcome ${name}`);
  log(welcome);
};
