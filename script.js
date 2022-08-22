// 1. // isPrime - Returns true or false, indicating whether the given number is prime.

// function isPrime(number) {
// if (number < 2) {
//     return false;
// }
// if (number > 2) {
//     for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         return false;

//     }
        
//     }
// }
// return true;
// }

// console.log(isPrime(0));                          // false
// console.log(isPrime(1));                          // false
// console.log(isPrime(17));                         // true
// console.log(isPrime(10000000000000));             // false








// 2. // factorial - Returns a number that is the factorial of the given number.

// function factorial (n) {
//     if (n === 0 ) {
//         return 1;
//     }
//     let result = 1;
//      for (let i = 1; i < n + 1; i += 1) {
//         result *= i; 
//       }
//       return result;
// }

// console.log(factorial(0));                        // 1
// console.log(factorial(1));                       // 1
// console.log(factorial(6));                      // 720






// 3. // fib - Returns the nth Fibonacci number.



// function fib(n) {
//     let arr = [0, 1];
 
//     for (let i = 2; i <= n; i++) {
//       arr[i] = arr[i - 1] + arr[i - 2];
//       }
//       return arr[n]; }



// console.log(fib(0));                              // 0
// console.log(fib(1));                              // 1
// console.log(fib(10));                             // 55
// console.log(fib(20));                             // 6765




// 4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

// 6. //indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// 9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false