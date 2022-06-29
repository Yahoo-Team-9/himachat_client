import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import ProfileModal from '../components/ProfileModal'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ImageList,
  Typography,
  ImageListItem,
  ListItemButton,
  Stack,
  Button,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { borderRadius } from '@mui/system'
import { VerticalAlignTop } from '@mui/icons-material'
import { io, Socket } from 'socket.io-client';

type MyProfile = {
  icon_path: string
  user_profiles: Array<Array<string>>
//   nortification: string
//   icon: string
}

type OthersNotification = {
  friend_id: number
  friend: number //primary_user_id
  user_id: string
  login_at: Date
  // icon: string
  // background: string
}
const AZURE_URL = "https://himathing.azurewebsites.net/"
const LOCAL_URL = "http://localhost:8080/"
const SERVER_URL = LOCAL_URL

const PRIMARY_USER_ID = 1



let socket: Socket;

const Nortification: NextPage = () => {
  const [myProfile, setMyProfile] = useState<MyProfile>({"icon_path": "./", "user_profiles": [[]]});
  const [himaFriends, setHimaFriends] = useState<OthersNotification[]>([]);
  const [friends, setFriends] = useState<OthersNotification[]>([]);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { data: session } = useSession()

  const setupSocket = async (
    user_id: string,
    friend_ids: number[]
  ) => {
      socket = io(SERVER_URL).connect();
      socket.emit("join", user_id, friend_ids)
      socket.on("update_hima_status", handle_hima_status) //友達の誰かが、暇状態を更新したため、main画面を更新
  };

  const handle_hima_status = () => {
      fetch(SERVER_URL + "api/friend/get_hima_friend_list", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        },
      body: JSON.stringify({"primary_user_id": PRIMARY_USER_ID})
    })
      .then((res) => res.json())
      .then((data) => setHimaFriends(data))
  }

  useEffect(() => {
    fetch(SERVER_URL + "api/user/get_profile", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        },
      body: JSON.stringify({"primary_user_id": PRIMARY_USER_ID})
    })
      .then((res) => res.json()) 
      .then((data) => setMyProfile(data))

    fetch(SERVER_URL + "api/friend/get_hima_friend_list", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        },
      body: JSON.stringify({"primary_user_id": PRIMARY_USER_ID})
    })
      .then((res) => res.json())
      .then((data) => setHimaFriends(data))
  }, [])
      
  useEffect(() => {
    fetch(SERVER_URL + "api/friend/get_friend_list", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ "primary_user_id": PRIMARY_USER_ID})
    })
      .then((res) => res.json())
      .then((data) => setFriends(data))

    const friend_ids: number[] = friends.map((obj) => obj.friend_id)
    if (friend_ids.length != 0) {
      setupSocket(myProfile["user_profiles"][0][1], friend_ids)
      // 友達に自分がログインしたことを通知
      socket.emit("update_hima_status", friend_ids)
    }
  }, [friends])
  
    
  return (
    <div>
      <Header title={'フォロー中'} />

  if (session) {
    return (
      <div>
        <Header title={'フォロー中'} />

          return (
            <List sx={{ width: '100%', bgcolor: '#fff', height: 80 }} disablePadding key={myProfile["user_profiles"][0][0]}>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemAvatar style={{ paddingLeft: 16, paddingRight: 16, marginTop: 15 }}>
                  <Avatar alt='Icon' src={IconImage.src} style={{ borderRadius: 10, height: 48, width: 48 }} />
          {/* <Avatar alt='Icon' src={myProfile.icon} style={{ borderRadius: 10, height: 48, width: 48 }} /> */}
                <ListItemText
                  style={{ marginTop: 20 }}
                  primary={myProfile["user_profiles"][0][1]}
                  primaryTypographyProps={{
                    fontWeight: 'medium',
                    fontSize: '14px',
                  }}
                  secondary={"login at " + new Date(myProfile["user_profiles"][0][5]).getHours() + ":" + new Date(myProfile["user_profiles"][0][5]).getMinutes()}
                  secondaryTypographyProps={{
                    fontWeight: 'medium',
                    fontSize: '12px',
                    display: 'inline',
                  }}
                />
              </ListItem>
            </List>

        <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginBottom: 80 }}>
          <ImageList sx={{ height: 1230 }} cols={2} rowHeight={164}>
            {friends.map((friend: OthersNotification) => (
              <ImageListItem key={friend.friend} style={{ alignItems: 'center', justifyContent: 'space-even' }}>
                <ListItemButton onClick={handleOpen}>
                  {/* <img src={`${friend.icon}`} style={{ width: 150, height: 150, borderRadius: 10}} /> */}
                <img src={IconImage.src} style={{ width: 150, height: 150, borderRadius: 10}} />
                </ListItemButton>
                <Typography style={{ fontSize: 16, color: '#141D26' }}>{friend.user_id}</Typography>
                <Typography style={{ color: '#808080', fontSize: 12 }}>{"login at " + new Date(friend.login_at).getHours() + ":" + new Date(friend.login_at).getMinutes()} </Typography>
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

        <Footer homeiconcolor="#141D26" belliconcolor="#808080" iconcolor="#808080" />
      </div>
    )
  }
  return (
    <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginTop: '50%' }}>
      <span>Not signed in </span>
      <br />
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
    </Stack>
  )
}

export default Nortification
