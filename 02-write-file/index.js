const fs = require('fs');
const readline = require('readline');

fs.writeFile('02-write-file/text.txt', '', (err) => {
    if (err) throw err;
});

const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
});

rl.question('Введите текст:\n', (text) => {
    fs.writeFile('02-write-file/text.txt', text, (err) => {
        if (err) throw err;
        console.log('Текст успешно записан');
    });
    rl.close();
});