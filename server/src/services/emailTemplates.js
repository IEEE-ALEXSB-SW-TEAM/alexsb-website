import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonFilePath = path.join(__dirname, "../../resources/emailTemplates.json");

const emailTemplates = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

export { emailTemplates };
