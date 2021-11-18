#!/usr/bin/env node
import program from "commander";
import require from "../shared/require.js";
import init from "../lib/init.js";
import refresh from "../lib/refresh.js";

program.version(require("../package.json").version);

program.command("init <name>").description("init project").action(init);
program.command("refresh").description("refresh router").action(refresh);

program.parse(process.argv);
