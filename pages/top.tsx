import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import ProfileModal from '../components/ProfileModal'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ImageList, Typography, ImageListItem, ListItemButton, Stack } from '@mui/material'
import { useState } from 'react'
import { borderRadius } from '@mui/system'
import { VerticalAlignTop } from '@mui/icons-material'

type OthersNotification = {
  id: number
  user_name: string
  nortification: string
  icon: string
  background: string
}

const Nortification: NextPage = () => {
  const friends: OthersNotification[] = [
    {
      id: 1,
      user_name: 'User Name0',
      nortification: "30秒前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 2,
      user_name: 'User Name1',
      nortification: "1分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 3,
      user_name: 'User Name2',
      nortification: "5分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 4,
      user_name: 'User Name3',
      nortification: "10分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 5,
      user_name: 'User Name4',
      nortification: "10分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 6,
      user_name: 'User Name5',
      nortification: "20分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 7,
      user_name: 'ユーザーネーム',
      nortification: "29分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 8,
      user_name: 'ユーザーネーム1',
      nortification: "30分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 9,
      user_name: 'ユーザーネーム2',
      nortification: "45分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      },
      {
      id: 10,
      user_name: 'ユーザーネーム3',
      nortification: "59分前に暇になった",
      icon: IconImage.src,
      background: BackgroundImage.src,
      }
  ]

type MyProfile = {
  id: number
  user_name: string
  nortification: string
  icon: string
}
  
const users: MyProfile[] = [
        { id: 0, user_name: "My User Name", nortification: "1分前に暇になりました", icon: IconImage.src },
]
    
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
    
  return (
    <div>
      <Header title={'フォロー中'} />

      {users.map((user: MyProfile) => {
         return (
            <List sx={{ width: '100%',bgcolor: '#fff', height: 80}} disablePadding >
						<ListItem alignItems="flex-start" disablePadding key={user.id}  >
						<ListItemAvatar style={{paddingLeft: 16, paddingRight: 16, marginTop: 15}}>
								<Avatar alt='Icon' src={user.icon} style={{ borderRadius: 10, height: 48, width: 48 }} />
						</ListItemAvatar>
						<ListItemText style={{marginTop: 20}}
								primary={user.user_name}
								primaryTypographyProps={{
								fontWeight: 'medium',
								fontSize: "14px"
								}}                      
								secondary={user.nortification}
                secondaryTypographyProps={{
                fontWeight: 'medium',
                fontSize: "12px",
                display: 'inline'
								}}/> 
             </ListItem>
              </List>
          )})}
      
    <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginBottom: 80}}>

    <ImageList sx={{  height: 1230 }} cols={2} rowHeight={164}>
      {friends.map((friend: OthersNotification) => (
          <ImageListItem key={friend.id} style={{ alignItems: 'center', justifyContent: 'space-even' }}>
              <ListItemButton onClick={handleOpen}>
                <img src={`${friend.icon}`} style={{ width: 150, height: 150, borderRadius: 10}} />
                </ListItemButton>
              <Typography style={{ fontSize: 16 , color: '#141D26'}}>{friend.user_name}</Typography>
              <Typography style={{ color: '#808080', fontSize: 12 }}>{friend.nortification} </Typography>
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


      <Footer homeiconcolor="#141D26" talkiconcolor="#808080" belliconcolor="#808080" iconcolor="#808080"/>
    </div>
  )
}

export default Nortification