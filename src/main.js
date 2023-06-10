// How to read a file using NodeJS?
// this is a internal module.
import { readFileSync } from "node:fs";

let filePath = "C:\CDAC\WPT\day9\package.json";
let fileData = readFileSync(filePath, { encoding: "utf-8" });
console.log(fileData);