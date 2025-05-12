// problems/2620-Counter.ts
export const counter = (n: number) => {
  let current = n
  return () => current++
}
// export const counterWithInterval = n => {
//   let current = n

//   const intervalId = setInterval(() => {
//     console.log(current++)
//   }, 1000) // every 1 second

//   return () => clearInterval(intervalId) // allow manual stop
// }
// const stopCounter = counterWithInterval(5)
// // It will automatically log 5, 6, 7, 8... every second

// // Later if you want to stop it
// setTimeout(() => {
//   stopCounter() // stops the interval
// }, 5000) // stop after 5 seconds
