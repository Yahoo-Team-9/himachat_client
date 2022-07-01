import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'

import { Stack, Button, Typography, ListItemButton, ListItemText, Divider } from '@mui/material'

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
  user_name: string
  bio: string
  tag_list: string[]
  friend_list: number[]
  // icon: string
  // background: string
}
const AZURE_URL = "https://himathing.azurewebsites.net/"
const LOCAL_URL = "http://localhost:8080/"
const SERVER_URL = AZURE_URL

const Profile: NextPage = () => {
  const [myProfile, setMyProfile] = useState<MyProfile>({"icon_path": "./", "user_profiles": [[]]});
  const [friends, setFriends] = useState<OthersNotification[]>([]);
  const { data: session } = useSession()

  useEffect(() => {
      // 自分のプロフィールを取得
    if (session) {
      fetch(SERVER_URL + "api/user/get_profile", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ "primary_user_id": session["primary_user_id"] })
      })
        .then((res) => res.json())
        .then((data) => setMyProfile(data))
      // 友達のリストを取得
      fetch(SERVER_URL + "api/friend/get_friend_list", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ "primary_user_id": session["primary_user_id"] })
      })
        .then((res) => res.json())
        .then((data) => setFriends(data))
    }  
  }, [])

  const handler = (path: any) => {
    Router.push(path)
  }
  if (session) {
    return (
      <div>
        <Header title={'プロフィール'} />          
          <Stack style={{ alignItems: 'center', justifyContent: 'space-even' }} key={myProfile["user_profiles"][0][1]}>
            <img src={`${BackgroundImage.src}`} style={{ width: 428, height: 120 }} />
            <img
              alt="Icon"
              src={IconImage.src}
              style={{ width: 120, height: 120, borderRadius: 90, top: 120, position: 'absolute' }}
            />
            <Typography style={{ fontSize: 16, paddingTop: 70 }}>{myProfile["user_profiles"][0][2]}</Typography>
            <Typography style={{ color: '#808080', fontSize: 14 }}>{myProfile["user_profiles"][0][1]} </Typography>
            <Stack direction="row">
              <Button variant="text" style={{ color: '#141d26', fontSize: 14 }} onClick={() => handler('/follow')}>
                {friends.length} <span> 友達</span>{' '}
              </Button>
            </Stack>  

            <span style={{ fontSize: 14, color: '#808080', paddingTop: 40, paddingRight: 270, paddingBottom: 5 }}>
              {' '}
              各種設定{' '}
            </span>

            <ListItemButton
              style={{ background: '#ffffff', width: 348, height: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              onClick={() => handler('/edit-account')}
            >
              <ListItemText primary="アカウント設定" style={{ fontSize: 14, color: '#141d26', paddingLeft: 10 }} />
              <ArrowForwardIosRoundedIcon style={{ width: 24, height: 24, color: '#141d26' }} />
            </ListItemButton>
            <Divider style={{ color: '#aaaaaa', width: 328, marginLeft: 20 }} />
            <ListItemButton
              style={{ background: '#ffffff', width: 348, height: 50 }}
              onClick={() => handler('/setting_release.tsx')}>
            
              <ListItemText primary="公開設定" style={{ fontSize: 14, color: '#141d26', paddingLeft: 10 }} />
              <ArrowForwardIosRoundedIcon style={{ width: 24, height: 24, color: '#141d26' }} />
            </ListItemButton>
            <Divider style={{ color: '#aaaaaa', width: 328, marginLeft: 20, float: 'right' }} />
            <ListItemButton
              style={{ background: '#ffffff', width: 348, height: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
              onClick={() => handler('/logout')}
            >
              <ListItemText primary="ログアウト" style={{ fontSize: 14, color: '#dd5144', paddingLeft: 10 }} />
            </ListItemButton>
          </Stack>
          
        
        <Footer homeiconcolor="#808080" belliconcolor="#808080" iconcolor="#141D26" />
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

export default Profile