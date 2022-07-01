import { useSession, signIn, signOut } from 'next-auth/react'
import { NextPage } from 'next'
import { Button, Stack } from '@mui/material'
import Router from 'next/router'
import { useEffect } from 'react'

const handler = (path: any) => {
  Router.push(path)
}
const set_session = (session_token: any, primary_user_id: any) => {
  const get_cookie_data = {
    session_token: session_token,
    primary_user_id: primary_user_id,
  }
  console.log(session_token)

  fetch('https://himathing.azurewebsites.net/api/user/set_session', {
    // 送信先URL
    method: 'post', // 通信メソッド
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json charset=utf-8',
    },
    body: JSON.stringify(get_cookie_data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })
}

const Home: NextPage = () => {
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
      set_session(session.session_token, session.primary_user_id)
    }
  })
  if (session) {
    return (
      <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginTop: '50%' }}>
        <span>Welcome！</span>
        <br />
        <Button variant="contained" onClick={() => handler('/create-account')}>
          アプリを開始する
        </Button>
        <br />
        <Button variant="contained" onClick={() => signOut({ callbackUrl: `http://localhost:3000` })} color="warning">
          Sign out
        </Button>
      </Stack>
    )
  }
  return (
    <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginTop: '50%' }}>
      <span>Not signed in </span>
      <br />
      <Button variant="contained" onClick={() => signIn('github', { callbackUrl: `http://localhost:3000` })}>
        Sign in
      </Button>
    </Stack>
  )
}

export default Home
