// Given an array of functions [f1, f2, f3], return a new function that composes them:
// compose([f1, f2, f3])(x) => f1(f2(f3(x)))

export const warmupCompose = functions => {
  for (let i = 0; i <= functions.length - 1; i++) {
    return function (x: number) {
      console.log('functions[i](x)', functions[i](x))
      console.log('functions[i]', functions[i])
      return functions[i](x)
    }
  }
}

// Example:
const add1 = x => x + 1
const times2 = x => x * 2

const fn = warmupCompose([add1, times2])
console.log(fn(4)) // should print 9 => add1(times2(4)) => add1(8) => 9
