import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import ProfileModal from '../components/ProfileModal'
import { ImageList, Typography, ImageListItem, ListItemButton, Stack } from '@mui/material'
import { useState } from 'react'

type MyProfile = {
  id: number
  user_name: string
  nortification: string
  icon: string
  background: string
}

const Profile: NextPage = () => {
  const users: MyProfile[] = [
    {
      id: 1,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 2,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 3,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 4,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 5,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 6,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 7,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 8,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 9,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 10,
      user_name: 'User Name',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      }
  ]
    
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)
    
  return (
    <div>
    <Header title={'フォロー中'} />
    <Stack style={{ alignItems: 'center', justifyContent: 'space-even' }}>

    <ImageList sx={{ width: 348, height: 1230 }} cols={2} rowHeight={164}>
      {users.map((user: MyProfile) => (
          <ImageListItem key={user.id} style={{ alignItems: 'center', justifyContent: 'space-even' }}>
              <ListItemButton onClick={handleOpen}>
                <img src={`${user.icon}`} style={{ width: 150, height: 150 }} />
                </ListItemButton>
              <Typography style={{ fontSize: 16 , color: '#141D26'}}>{user.user_name}</Typography>
              <Typography style={{ color: '#808080', fontSize: 12 }}>{user.nortification} </Typography>
        </ImageListItem>
      ))}
    </ImageList>
              
    </Stack>
          
    <ProfileModal
        open={open}
        handleClose={handleClose}
        name={'User Name'}
        icon={IconImage.src}
        background={BackgroundImage.src}
        userid={'@user_id'}
        follow={123}
        follower={123}
      />
    <Footer homeiconcolor="#141D26" talkiconcolor="#808080" belliconcolor="#808080" iconcolor="#808080" />
    </div>
  )
}

export default Profile
