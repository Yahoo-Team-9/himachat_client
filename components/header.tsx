import type { NextPage } from 'next'
import { AppBar, Toolbar, Box } from '@mui/material'

const Header: NextPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    sample text
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header