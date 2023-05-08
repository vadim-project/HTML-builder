const path = require('path');
const fs = require('fs');

let cssSource = path.join(__dirname, 'styles');
let bundleTarget = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(cssSource, (err, files) => {
    if (err) throw err;
    fs.writeFile(
        bundleTarget,
        '',
        (err) => { if (err) throw err; }
    );
    files.forEach(file => {
        let filePath = path.join(cssSource, file);
        fs.stat(filePath, (err, stats) => {
            if (err) throw err;
            if (stats.isFile() && path.extname(file) === '.css') {
                fs.readFile(filePath, (err, data) => {
                    if (err) throw err;
                    fs.appendFile(
                        bundleTarget,
                        data,
                        (err) => { if (err) throw err; }
                    );
                });
            }
        });
    });
});