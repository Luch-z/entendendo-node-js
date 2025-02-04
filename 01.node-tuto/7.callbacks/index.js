const fs = require("fs");

function person(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function address() {
    console.log("India");
}

person("Sangan", address);

fs.readFile('input.txt', "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file", err);
        return;
    }

    console.log(data);
});
