// Name: GALLANONGO, GILBERT B.
// Section: IV-BSIT B.
// ELEC 3 - N3 File Manager
// Date: November 21, 2026

const fs = require("fs");
const path = require("path");

// Dito ise-save ang mga files.
const filesDirectory = path.join(__dirname, "files");

// Gumawa ng files folder kung wala pa.
if (!fs.existsSync(filesDirectory)) {
    fs.mkdirSync(filesDirectory);
}

// Kunin ang command mula sa terminal.
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

// Iwasan ang walang filename.
if (!command || !fileName) {
    console.log("Usage:");
    console.log('node index.js create filename.txt "content"');
    console.log("node index.js read filename.txt");
    process.exit(1);
}

// Siguraduhing filename lang ang gagamitin.
const safeFileName = path.basename(fileName);
const filePath = path.join(filesDirectory, safeFileName);

if (command === "create") {
    if (content === undefined) {
        console.log("Please provide file content.");
        process.exit(1);
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`File created: ${safeFileName}`);

} else if (command === "read") {
    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        process.exit(1);
    }

    const fileContent = fs.readFileSync(filePath, "utf8");

    console.log(`File name: ${safeFileName}`);
    console.log("File content:");
    console.log(fileContent);


} else if (command === "update") {
    if (content === undefined) {
        console.log("Please provide new file content.");
        process.exit(1);
    }

    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        process.exit(1);
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`File updated: ${safeFileName}`);

} else if (command === "delete") {
    if (!fs.existsSync(filePath)) {
        console.log("Error: File not found.");
        process.exit(1);
    }

    fs.unlinkSync(filePath);
    console.log(`File deleted: ${safeFileName}`);


} else if (command === "list") {
    const fileList = fs.readdirSync(filesDirectory);

    if (fileList.length === 0) {
        console.log("No files found.");
    } else {
        console.log("Files in directory:");

        fileList.forEach((file) => {
            const fullPath = path.join(filesDirectory, file);
            const extension = path.extname(file);
            const fileContent = fs.readFileSync(fullPath, "utf8");

            console.log("\n----------------------------");
            console.log("Filename:", file);
            console.log("Full Path:", fullPath);
            console.log("Extension:", extension || "No extension");
            console.log("Content:", fileContent);
        });
    }

} else {
    console.log("Error: Unknown command.");
}