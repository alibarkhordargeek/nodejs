const { readFileSync } = require("fs")

const read_file = (file_n) => {
    return readFileSync(file_n)
}
module.exports = read_file