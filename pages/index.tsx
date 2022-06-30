import { useSession, signIn, signOut } from 'next-auth/react'
import { NextPage } from 'next'
import { Button, Stack } from '@mui/material'
import Router from 'next/router'

const handler = (path: any) => {
  Router.push(path)
}

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Stack style={{ alignItems: 'center', justifyContent: 'space-even', marginTop: '50%' }}>
        <span>Welcome！</span>
        <br />
        <Button variant="contained" onClick={() => handler('/top')}>
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
