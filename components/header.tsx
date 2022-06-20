import type { NextPage } from 'next'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'

interface Props {
  title: String
}

const Header: NextPage<Props> = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static" elevation={0} sx={{ borderBottom: 1, borderBottomColor: '#f5f6f6' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
