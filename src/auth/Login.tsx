import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

// Define the props type for the Login component
interface LoginProps {
  onLogin: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | boolean>(false) // Allow string or boolean

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Hardcoded username and password
    const hardcodedUsername = 'ccavanaugh1987'
    const hardcodedPassword = 'Paradox-1991*!'

    if (username === hardcodedUsername && password === hardcodedPassword) {
      onLogin()
    } else {
      setError('Invalid credentials') // Set error message
    }
  }

  return (
    // <Box className='login-div' style={{ textAlign: 'center' }}>
    <>
      {/* Use a standard form element to handle submission */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
          <Box>
            <Typography variant='h2' sx={{ color: 'rgba(255,255,255)', textAlign: 'center' }}>
              Login
            </Typography>
          </Box>
          <Box m={1}>
            <TextField
              type='text'
              placeholder='Username'
              value={username}
              onChange={e => {
                setUsername(e.target.value)
                setError(false) // Clear error on input change
              }}
              required
              variant='outlined'
              sx={{
                backgroundColor: '#f5f5f5', // light background color
                borderRadius: '8px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray', // default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'blue', // border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'green', // border color when focused
                  },
                },
                input: {
                  color: '#333', // Text color
                },
              }}
            />
          </Box>
          <Box m={1}>
            <TextField
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              variant='outlined'
              sx={{
                backgroundColor: '#f5f5f5', // light background color
                borderRadius: '8px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray', // default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'blue', // border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'green', // border color when focused
                  },
                },
                input: {
                  color: '#333', // Text color
                },
              }}
            />
          </Box>
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Login
          </Button>
          {/* Conditionally render the error message if it is a string */}
          {typeof error === 'string' && <Typography sx={{ color: 'red' }}>{error}</Typography>}
        </form>
      </Box>

      {/* </Box> */}
    </>
  )
}

export default Login
