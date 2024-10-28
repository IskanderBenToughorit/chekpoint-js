// String Manipulation Functions

function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Array Functions

function findMaximum(arr) {
    var max = arr[0];
    for (var num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}


function findMinimum(arr) {
    var min = arr[0];
    for (var num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}


function sumOfArray(arr) {
    var sum = 0;
    for (var num of arr) {
        sum += num;
    }
    return sum;
}

function filterArray(arr, condition) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}


// Mathematical Functions

function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function fibonacci(n) {
    const fib = [];
    for (var i = 0; i < n; i++) {
        if (i === 0) fib.push(0);
        else if (i === 1) fib.push(1);
        else fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}


// Example Usage
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(findMaximum([1, 2, 3, 4, 5])); // 5
console.log(findMinimum([1, 2, 3, 4, 5])); // 1
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], x => x % 2 === 0)); // [2, 4]
console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
