const lodash = require("lodash");

const names = ["karen", "joe", "rick", "alex", "mia"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
