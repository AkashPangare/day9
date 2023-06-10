import { readFile } from "node:fs/promises";

async function main() {
  try {
    let filePath = "/Users/research/Desktoop/day9/package.json";
    let fileData = await readFile(filePath, { encoding: "utf8" });
    console.log(fileData);
  } catch (e) {
    console.log("Exception Occured :: ", e.message);
  }
}

main();