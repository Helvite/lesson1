let word = 'Арнольд';
let result = '';

for (let i = 0; i < word.length; i++) {
    if (word[i] != 'а' && word[i] != 'А' && word[i] != 'о' && word[i] != 'О') {
        result += word[i];
    }
}

console.log(result);

// 2
let num = 20;

for (let i = 1; i <= num; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 3
let num = 5;
let result = '';

for (let i = 1; i <= num; i++) {
    result += i;
    console.log(result);
}

// 4
let num = 4;
let sum = 0;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
    sum += factorial;
}

console.log(sum);

// 5
let word = 'потоп';
let reverse = '';

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}

if (word == reverse) {
    console.log('YES');
} else {
    console.log('NO');
}