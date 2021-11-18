import { promisify } from "util";
import { spawn } from "child_process";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";
import clone from "./download.js";
import ora from "ora";

const log = content => console.log(chalk.green(content));
const asyncFiglet = promisify(figlet);
const asyncSpawn = (...args) => {
  return new Promise(resolve => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);

    childProcess.on("close", () => resolve());
  });
};

export default async name => {
  // ? 欢迎界面
  const welcome = await asyncFiglet(`Welcome`);
  clear();
  log(welcome);

  // ? 下载模板创建项目
  log("创建项目: " + name);
  await clone("github:su37josephxia/vue-template", name);

  // ? 安装依赖
  const progress = ora("安装依赖");
  progress.start();
  await asyncSpawn("npm", ["install"], {
    cwd: "./" + name
  });
  progress.succeed();
  log(`
  安装完成，执行以下命令启动项目
  ==========================
  cd ${name}
  npm run serve
  ==========================
    `);
};
