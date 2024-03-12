// gugudan.js

const readline = require('readline');

function generateGugudan(gugudan) {
    console.log(`구구단 ${gugudan}단 출력\n`);
    
    for (let j = 1; j <= 9; j++) {
        console.log(`${gugudan} x ${j} = ${gugudan * j}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('출력할 구구단 단수를 입력하세요 (2부터 9까지): ', (input) => {
    const gugudan = parseInt(input);

    if (isNaN(gugudan) || gugudan < 2 || gugudan > 9) {
        console.log('2부터 9까지의 숫자를 입력하세요.');
    } else {
        generateGugudan(gugudan);
    }

    rl.close();
});
