
console.log('1. // isPrime - Returns true or false, indicating whether the given number is prime. ')
1. // isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime(number) {
if (number < 2) {
    return false;
}
if (number > 2) {
    for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;

    }
        
    }
}
return true;
}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false





console.log('2. // factorial - Returns a number that is the factorial of the given number')


2. // factorial - Returns a number that is the factorial of the given number.

function factorial (n) {
    if (n === 0 ) {
        return 1;
    }
    let result = 1;
     for (let i = 1; i < n + 1; i += 1) {
        result *= i; 
      }
      return result;
}

console.log(factorial(0));                        // 1
console.log(factorial(1));                       // 1
console.log(factorial(6));                      // 720



console.log('3. // fib - Returns the nth Fibonacci number.')


3. // fib - Returns the nth Fibonacci number.



function fib(n) {
    let arr = [0, 1];
 
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      }
      return arr[n]; }



console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765


console.log('4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.')

4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.




function isSorted(array) {
for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1])
    return false;
    
}
return true;
}





console.log(isSorted([]));                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log(isSorted([3, 9, -3, 10]));            // false






console.log('5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).')

 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).


function reverse(string) {
    let str = string.split('').reverse().join('');
return str;
}




console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                  // 'fedcba'


console.log('6. //indexOf - Implement the indexOf function for arrays.')

6. //indexOf - Implement the indexOf function for arrays.
function indexOf(array, e) {
for (let i = 0; i < array.length; i++) {
    if (array[i] === e) {
        return i;
        }
    
}
    return -1;
}


console.log(indexOf([1, 2, 3], 1));               // 0
console.log(indexOf([1, 2, 3], 4));              // -1




console.log('7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).')

7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

function isPalindrome(str) {
let array = str.split(' ').join('').toLowerCase().split('');
for (let i = 0; i < array.length; i++) {
 if (array[i] !== array[array.length - 1 - i]) {
    return false;

 }
}

return true;
}


console.log(isPalindrome(''))                                // true
console.log(isPalindrome('abcdcba'))                         // true
console.log(isPalindrome('abcd'))                            // false
console.log(isPalindrome('A man a plan a canal Panama'))     // true




console.log('8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.')


// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(array) {
let newArray = array.sort(function(a, b) {
    return a - b;
  })
   for (let i = 1; i < newArray.length; i++) {
    if (i !== newArray[i - 1]) {
        return i;
    }
    
  }
  return undefined;
}





console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]))               // 3
console.log(missing([1, 2, 3, 4]))               // undefined



console.log('9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.')


9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
let result = true;
let array = [];
let strArray = str.split('');
for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === '{' || strArray[i] === '}') {
        array.push(strArray[i]);
    }
    
}

for (let i = 0; i < array.length / 2; i++) {
   if (array[i] === '{' && array[array.length - 1 - i] === '}') {
    result = true;
    
   }
   else {
    result = false;
   }
    
}

return result;
}




console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // false
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false