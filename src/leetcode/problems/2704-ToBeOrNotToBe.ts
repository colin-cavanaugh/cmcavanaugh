// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

export const expect = (val: any): ToBeOrNotToBe => {
  return {
    toBe: (val2: any) => {
      if (val !== val2) throw new Error('Not equal')
      return true
    },
    notToBe: (val2: any) => {
      if (val === val2) throw new Error('Equal')
      return true
    },
  }
}
