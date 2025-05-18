/*
Problem 5: Favorite Movie Rating
Create a component that:

Renders a text input for entering a movie name

Includes a dropdown to rate the movie (1–5 stars)

A submit button

When submitted:

Display: “You rated [movie] [rating] stars!”

If either field is empty, show a validation error.
*/
import React, { FormEventHandler, useState } from 'react'

const STAR = '\u2605'
const EMPTY_STAR = '\u2606'

const FavoriteMovieRating = () => {
  const [movie, setMovie] = useState<string>('')
  const [rating, setRating] = useState<string>('')
  const [submittedRating, setSubmittedRating] = useState<string>('')
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    setSubmittedRating(`You rated ${movie} ${rating}!`)
  }

  return (
    <div className='container'>
      <form className='movie-form' onSubmit={handleSubmit}>
        <input value={movie} type='text' placeholder='Enter movie' onChange={event => setMovie(event.target.value)} />
        <select value={rating} onChange={e => setRating(e.target.value)}>
          <option key={'5 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {/* {'5 stars'} */}
            {STAR}
            {STAR}
            {STAR}
            {STAR}
            {STAR}
          </option>
          <option key={'4 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {STAR}
            {STAR}
            {STAR}
            {STAR}
            {EMPTY_STAR}
          </option>
          <option key={'3 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {STAR}
            {STAR}
            {STAR}
            {EMPTY_STAR}
            {EMPTY_STAR}
          </option>
          <option key={'2 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {'2 stars'}
          </option>
          <option key={'1 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {'1 stars'}
          </option>
          <option key={'0 stars'} style={{ display: 'flex', flexDirection: 'row' }}>
            {'0 stars'}
          </option>
        </select>
        <button>Submit</button>
      </form>
      <p>{submittedRating}</p>
    </div>
  )
}

export default FavoriteMovieRating
