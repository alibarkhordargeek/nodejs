const { readFileSync } = require("fs")

const readHtml = (file) => {
    return readFileSync(file)
}
module.exports = readHtml