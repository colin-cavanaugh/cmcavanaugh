/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
*/

type Counter = {
  increment: () => number
  decrement: () => number
  reset: () => number
}
export const createCounter = (init: number): Counter => {
  const initialValue = init
  let currentValue = init
  return {
    increment: () => {
      console.log('increment+', currentValue)
      currentValue += 1
      return currentValue
    },
    decrement: () => {
      currentValue -= 1
      console.log('decrement-', currentValue)

      return currentValue
    },
    reset: () => {
      console.log('reset', init)
      currentValue = initialValue
      return currentValue
    },
  }
}
