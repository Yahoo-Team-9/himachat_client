import { NextPage } from 'next'
import { AppBar, Toolbar, Grid, IconButton, Stack, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/HomeRounded'
import NotificationsIcon from '@mui/icons-material/NotificationsRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircleRounded'
import Router from 'next/router'

const handler = (path: any) => {
  Router.push(path)
}

interface Props {
  homeiconcolor: string
  belliconcolor: string
  iconcolor: string
}

const Footer: NextPage<Props> = ({ homeiconcolor, belliconcolor, iconcolor }) => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{ top: 'auto', bottom: 0, height: '70px', borderTop: 1, borderTopColor: '#f5f6f6' }}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={4} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: 0.5 }}>
            <IconButton style={{ width: 64, height: 64, color: homeiconcolor }} onClick={() => handler('/top')}>
              <Stack>
                <HomeIcon style={{ fontSize: 40 }} />
                <Typography variant="caption" display="block">
                  ホーム
                </Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: 0.5 }}>
            <IconButton style={{ width: 64, height: 64, color: belliconcolor }} onClick={() => handler('/notification')}>
              <Stack>
                <NotificationsIcon style={{ fontSize: 40 }} />
                <Typography variant="caption" display="block">
                  通知
                </Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: 0.5 }}>
            <IconButton style={{ width: 64, height: 64, padding: 0, color: iconcolor }} onClick={() => handler('/profile')}>
              <Stack>
                <AccountCircleIcon style={{ fontSize: 40, margin: 'auto' }} />
                <Typography variant="caption">アカウント</Typography>
              </Stack>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
