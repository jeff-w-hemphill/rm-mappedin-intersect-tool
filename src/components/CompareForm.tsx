import { TextField, Grid, Box, Button } from '@mui/material'
import React from 'react'

type Props = {}

const CompareForm = (props: Props) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: '40%', margin: '20px' }} // Adjust the width of the form here
    >
      <Grid container spacing={5}>
        {/* First Row */}
        <Grid item xs={12}>
          <TextField fullWidth label="React Token" variant="outlined" multiline rows={4} />
        </Grid>
        {/* Second Row */}
        <Grid item xs={12}>
          <TextField label="React Org id" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="MappedIn Venue id" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button style={{ backgroundColor: '#30bcb0' }} variant="contained" fullWidth>
            Compare Buildings
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CompareForm
