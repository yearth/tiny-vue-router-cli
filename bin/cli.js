#!/usr/bin/env node
import program from "commander";
import require from "../shared/require.js";

program.version(require("../package.json").version);

program
  .command("init <name>")
  .description("init project")
  .action(name => console.log("hello commander", name));

program.parse(process.argv);
