import { promisify } from "util";
import downloadGitRepo from "download-git-repo";
import ora from "ora";
const asyncDownloadGitRepo = promisify(downloadGitRepo);

export default async function clone(repo, desc) {
  const progress = ora(`下载...${repo}`);
  progress.start();

  try {
    await asyncDownloadGitRepo(repo, desc);
  } catch (error) {
    console.error(error);
  } finally {
    progress.succeed();
  }
}
