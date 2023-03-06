import { execSync as exec } from "child_process";

async function cli() {
  try {
    exec("rollup -c rollup.config.mjs");

    exec("docker run --rm -i grafana/k6 run - <dist/script.js", {
      stdio: "inherit",
    });

    exec("npm run clean");
  } catch (e) {
    process.exit(1);
  }
}

if (require.main === module) cli();
