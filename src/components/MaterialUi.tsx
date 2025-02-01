import { Box, Chip, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const MaterialUi = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }))
  return (
    <Grid container spacing={1} width={'100%'} sx={{ height: 'calc(100vh - 205px)' }} py={1}>
      {/* Material UI */}
      <Grid
        size={12}
        sx={{ border: '2px solid', borderColor: 'rgb(249, 191, 59)', padding: '10px', borderRadius: '8px' }}
      >
        <Typography textAlign={'center'}>Material UI</Typography>
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(98, 211, 233)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(144, 238, 144)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(254, 250, 212)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(183, 244, 216)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(227, 186, 143)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(255, 255, 255)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(255, 148, 112)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(205, 209, 228)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(249, 191, 59)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(3, 138, 255)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(0, 181, 204)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
      <Grid size={6}>
        <Item sx={{ border: '2px solid', borderColor: 'rgb(240, 128, 128)', padding: '10px', borderRadius: '8px' }} />
      </Grid>
    </Grid>
  )
}

export default MaterialUi
