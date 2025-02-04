const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder created!");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello node js");
console.log("file created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added");
console.log("new file content added");

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async", (err) => {
    if (err) throw err;
    console.log("Async file is created successfully");

    fs.readFile(asyncFilePath, "utf8", (err, data) => {
        if (err) throw err;
        console.log("Async file content:", data);

        fs.appendFile(asyncFilePath, "\nThis another line added", (err) => {
            if (err) throw err;
            console.log("New line added to async file");

            fs.readFile(asyncFilePath, "utf8", (err, updateData) => {
                if (err) throw err;
                console.log("Update file content", updateData);
            });
        });
    });
});
