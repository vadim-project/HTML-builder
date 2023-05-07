const path = require('path');
const fs = require('fs');

const folderPath = path.join(__dirname, 'secret-folder')

fs.readdir(folderPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        fs.stat(path.join(folderPath, file), (err, stats) => {
            if (err) throw err;
            const ext = path.extname(file);
            const name = file.slice(0, -ext.length);
            let size = stats.size;
            if (size > 0) console.log(`${name} - ${ext} - ${size}`);
        });
    });
});