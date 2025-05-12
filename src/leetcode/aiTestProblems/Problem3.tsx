import React, { FormEventHandler, useState } from 'react'

/*
Create a small React form that allows a user to:
- Pick an emoji from a set of 3 (e.g. 🐶 🐱 🐭) using radio buttons
- Input a number (1–10) into a number input field
- Click a “Show” button

On click:
- Show the selected emoji repeated the given number of times (e.g. 🐶🐶🐶)
- If the number is missing or out of range (1–10), show an error
- The first emoji should be selected by default
*/
const Problem3 = () => {
  const defaultEmoji = '🐶'
  const [selectedEmoji, setSelectedEmoji] = useState<string>(defaultEmoji)
  const [emojiCount, setEmojiCount] = useState<number>(1)
  const [display, setDisplay] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (!emojiCount || emojiCount < 1 || emojiCount > 10) {
      setDisplay('Please enter a number between 1 and 10')
      return
    }
    setDisplay(selectedEmoji.repeat(emojiCount))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {['🐶', '🐱', '🐭'].map(emoji => (
          <label key={emoji}>
            <input type='radio' checked={selectedEmoji === emoji} onChange={() => setSelectedEmoji(emoji)} />
            {emoji}
          </label>
        ))}
        <input
          type='number'
          min={1}
          max={10}
          value={emojiCount}
          onChange={e => setEmojiCount(Number(e.target.value))}
        />
        <button>Show</button>
      </form>
      <p>{display}</p>
    </div>
  )
}

export default Problem3
