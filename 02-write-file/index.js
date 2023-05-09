const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

stdout.write('Введите текст: \n');

fs.writeFile(filePath, '', (err) => { if (err) throw err; });

stdin.on('data', (data) => {
    let msg = data.toString();
    if (msg === 'exit\r\n') process.exit();
    else fs.appendFile(filePath, data, (err) => { if (err) throw err; });
});

process.on('exit', () => {
    stdout.write('Спасибо, удачи!\n');
});

process.on('SIGINT', () => {
    process.exit();
});