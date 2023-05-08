const path = require('path');
const fs = require('fs');

let source = path.join(__dirname, 'files');
let target = path.join(__dirname, 'files-copy');

function copyDir(source, target) {
    fs.access(target, (err) => {
        if (!err) fs.rm(target, { recursive: true, force: true }, (err) => { 
            if (err) throw err;
            copyDir(source, target); 
        });
        fs.mkdir(target, { recursive: true }, (err) => { if (err) throw err; });
        fs.readdir(source, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                let sourceFile = path.join(source, file);
                let targetFile = path.join(target, file);
                fs.stat(sourceFile, (err, stats) => {
                    if (err) throw err;
                    if (stats.isFile())
                        fs.copyFile(
                            sourceFile,
                            targetFile,
                            (err) => { if (err) throw err; });
                    else copyDir(sourceFile, targetFile);
                });
            });
        });
    });
}
copyDir(source, target);