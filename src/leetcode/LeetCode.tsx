import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { countSubarrays } from './problems/3392-Count-Subarrays'
import { counter } from './problems/2620-Counter'
import { expect } from './problems/2704-ToBeOrNotToBe'
import { createCounter } from './problems/2665-Counter-Two'
import { map } from './problems/2635-Apply-Transform-Array'
import { compose } from './problems/2629-Function-Composition'
import { warmupCompose } from './problems/Warmup-FnComposition'
const LeetCode = () => {
  const nums = [1, 2, 1, 4, 1]
  const solution3992 = countSubarrays(nums)
  const solution2620 = counter(10)
  const solution2704 = expect(5).toBe(5)
  const counter2 = createCounter(0)
  const newArray = map([1, 2, 3], function plusone(n) {
    return n + 1
  })
  const newFn = compose([x => x + 1, x => x * x, x => 2 * x])
  const newFn2 = compose([x => x + 1, x => 2 * x])
  const add1 = x => x + 1
  const times2 = x => x * 2
  const warmupFnComposition = warmupCompose([add1, times2])
  console.log('warmupFnComposition', warmupFnComposition(4))

  // console.log('newComposition', newFn(4))
  // console.log('newComposition2', newFn2(4))
  return (
    <Box>
      <Typography>LeetCode</Typography>
      <Typography>{solution3992}</Typography>
      <Typography>{solution2620()}</Typography>
      <Typography>{solution2620()}</Typography>
      <Typography>{solution2620()}</Typography>
      <Button variant='contained' onClick={() => counter2.increment()}>
        +
      </Button>
      <Button variant='contained' onClick={() => counter2.decrement()}>
        -
      </Button>
      <Button variant='contained' onClick={() => counter2.reset()}>
        Reset
      </Button>
    </Box>
  )
}

export default LeetCode
