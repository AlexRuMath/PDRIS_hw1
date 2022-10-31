const csv = require("csv-parser")
const fs = require("fs")

module.exports = (file) => {
    const pathToFile = "./" + file 
    const isExistsFile = fs.existsSync(pathToFile)
    if(!isExistsFile){
        throw new Error(`The file is not exists: ${pathToFile}`)
    }


    return new Promise((res, rej) => {
        const results = [];

        fs.createReadStream(pathToFile)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data)
            })
            .on('end', () => {
                if (results.length === 0) {
                    throw new Error("File empty or not found")
                } else {
                    res(results)
                }
            });
    });
}   