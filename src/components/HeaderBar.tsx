import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import logo from '../Reactmobile_Logo.svg' // Import your logo image file

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  height: 64, // Adjust the height as needed
})

const LogoImage = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(2),
  height: 30, // Adjust the height as needed
}))

const Title = styled(Typography)({
  flexGrow: 1,
})

const HeaderBar: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <LogoImage src={logo} alt="Logo" />
        <Title variant="h6">Your App Name</Title>
        {/* Add additional components like buttons, icons, etc. here */}
      </Toolbar>
    </StyledAppBar>
  )
}

export default HeaderBar
