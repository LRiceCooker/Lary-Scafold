const { execSync } = require("child_process");
const config = require("./app.json");
const fs = require("fs");

function buildDesktop() {
  try {
    execSync("yarn build:web", { stdio: "inherit"});

    execSync(`npx create-tauri-app ${config.expo.name}-desktop --template vanilla --manager yarn`, { stdio: "inherit", maxBuffer: 1024 * 1024 * 10 });

    execSync(`rm -rdf ${config.expo.name}-desktop/src/*`);

    execSync(`cp -r web-build/* ${config.expo.name}-desktop/src`, { stdio: "inherit"});

    execSync(`cd ${config.expo.name}-desktop && yarn`, { stdio: "inherit"});

    let tauriConf = JSON.parse(fs.readFileSync(`./${config.expo.name}-desktop/src-tauri/tauri.conf.json`))
    tauriConf.tauri.windows[0].title = config.expo.name;
    tauriConf.tauri.bundle.identifier = `com.${config.expo.slug}.dev`;
    fs.writeFileSync(`./${config.expo.name}-desktop/src-tauri/tauri.conf.json`, JSON.stringify(tauriConf, null, 2));

    // execSync(`cd ${config.expo.name}-desktop && yarn tauri build`, { stdio: "inherit"});

    console.log("Tauri Build Complete !");
  } catch (err) {
    console.error(err);
  }
}

buildDesktop();
