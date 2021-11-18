import fs from "fs";
import handlebars from "handlebars";
import log from "../shared/log.js";

export default async () => {
  function compile(meta, filePath, templatePath) {
    if (!fs.existsSync(templatePath)) return;

    const content = fs.readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);

    fs.writeFileSync(filePath, result);

    log(`${filePath} 创建成功！`);
  }

  const fileList = fs
    .readdirSync("./src/views")
    .filter(v => v !== "Home.vue")
    .map(v => ({
      name: v.replace(".vue", "").toLowerCase(),
      file: v
    }));

  compile({ list: fileList }, "./src/router.js", "./template/router.js.hbs");
  compile({ list: fileList }, "./src/App.vue", "./template/App.vue.hbs");
};
