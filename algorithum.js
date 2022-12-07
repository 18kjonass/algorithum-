// initialize a string variable to hold the pattern
let pattern1 = "";
// use two nested for loops to generate the pattern
for (let i = 1; i <= 5; i++) {
    // in the outer loop, add each number from 1 to 5 to the pattern
    for (let j = 1; j <= i; j++) {
        pattern1 += j;
    }
    // add a newline character after each row is complete
    pattern1 += "\n";
}
// in the second half of the pattern, we want to reverse the numbers
// so we need to start the inner loop at 4 and decrement by 1 each time
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern1 += j;
    }
    pattern1 += "\n";
}
// finally, log the pattern to the console
console.log(pattern1);


// initialize a string variable to hold the pattern
let pattern2 = "";
// use two nested for loops to generate the pattern
for (let i = 1; i <= 5; i++) {
    // add a leading asterisk
    pattern2 += "*";
    // in the outer loop, add each number from 1 to 5 to the pattern
    for (let j = 1; j <= i; j++) {
        pattern2 += j;
    }
    // add the corresponding number in reverse order
    for (let j = i - 1; j >= 1; j--) {
        pattern2 += j;
    }
    // add a trailing asterisk and a newline character
    pattern2 += "*\n";
}
// in the second half of the pattern, we want to reverse the numbers
// so we need to start the inner loop at 4 and decrement by 1 each time
for (let i = 4; i >= 1; i--) {
    pattern2 += "*";
    for (let j = 1; j <= i; j++) {
        pattern2 += j;
    }
    for (let j = i - 1; j >= 1; j--) {
        pattern2 += j;
    }
    pattern2 += "*\n";
}
// finally, log the pattern to the console
console.log(pattern2);


// in the second half of the pattern, we want to reverse the numbers
// so we need to start the inner loop at 4 and decrement by 1 each time
for (let i = 4; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
        pattern3 += "  ";
    }
    pattern3 += i;
    for (let j = 5; j > i; j--) {
        pattern3 += "  ";
    }
    for (let j = 5; j > i; j--) {
        pattern3 += "  ";
    }
    pattern3 += i;
    pattern3 += "\n";
}
// finally, log the pattern to the console
console.log(pattern3);

