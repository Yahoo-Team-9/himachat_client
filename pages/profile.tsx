import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import { Stack, Button, Typography } from '@mui/material'

type MyProfile = {
  id: number
  user_name: string
  user_id: string
  followers: number
  followed: number
  icon: string
  background: string
}

const Profile: NextPage = () => {
  const users: MyProfile[] = [
    {
      id: 1,
      user_name: 'User Name',
      user_id: '@user_id',
      followers: 999,
      followed: 999,
      icon: IconImage.src,
      background: BackgroundImage.src,
    },
  ]

  return (
    <div>
      <Header title={'プロフィール'} />

      {users.map((user: MyProfile) => {
        return (
          <Stack style={{ alignItems: 'center', justifyContent: 'space-even' }} key={user.id}>
            <img src={`${user.background}`} style={{ width: 428, height: 120 }} />
            <img
              alt="Icon"
              src={user.icon}
              style={{ width: 120, height: 120, borderRadius: 90, top: 120, position: 'absolute' }}
            />
            <Typography style={{ fontSize: 16, paddingTop: 70 }}>{user.user_name}</Typography>
            <Typography style={{ color: '#808080', fontSize: 14 }}>{user.user_id} </Typography>
            <Stack direction="row">
              <Button variant="text" style={{ color: 'black', fontSize: 14 }}>
                {user.followers} <span> フォロー</span>{' '}
              </Button>
              <Button variant="text" style={{ color: 'black', fontSize: 14 }}>
                {user.followed} <span> フォロワー</span>{' '}
              </Button>
            </Stack>
          </Stack>
        )
      })}
      <Footer homeiconcolor="#808080" talkiconcolor="#808080" belliconcolor="#808080" iconcolor="#141D26" />
    </div>
  )
}

export default Profile
