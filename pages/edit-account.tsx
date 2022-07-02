import { NextPage } from 'next'
import Header from '../components/header'
import { TextField, Box, Button, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import { useCallback } from 'react'
import Router from 'next/router'
import { BiotechTwoTone } from '@mui/icons-material'
import { useSession, signIn } from 'next-auth/react'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import FaceIcon from '@mui/icons-material/Face'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type MyProfile = {
  icon_path: string
  user_profiles: Array<Array<string>>
//   nortification: string
//   icon: string
}

const handler = (path: any) => {
  Router.push(path)
}

const AZURE_URL = "https://himathing.azurewebsites.net/"
const LOCAL_URL = "http://localhost:8080/"
const SERVER_URL = AZURE_URL

const EditAccount: NextPage = () => {
  const [username, setName] = useState('')
  const [userid, setID] = useState('')
  const [bio, setBio] = useState('')

  const [hasNameError, setHasNameError] = useState(false)
  const [hasIDError, setHasIDError] = useState(false)
  const [hasBioError, setHasBioError] = useState(false)

  const { data: session } = useSession()

  const inputName = useCallback(
    (event: any) => {
      const inputValue = event.target.value
      const isEmpty = inputValue === ''
      setName(inputValue)
      setHasNameError(isEmpty)
    },
    [setName, setHasNameError]
  )
  const inputID = useCallback(
    (event: any) => {
      const inputValue = event.target.value
      const isEmpty = inputValue === ''
      setID(inputValue)
      setHasIDError(isEmpty)
    },
    [setID, setHasIDError]
  )
  const inputBio = useCallback(
    (event: any) => {
      const inputValue = event.target.value
      const isEmpty = inputValue === ''
      setBio(inputValue)
      setHasBioError(isEmpty)
    },
    [setBio, setHasBioError]
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isEmptyName = username === ''
    const isEmptyID = userid === ''
    const isEmptyBio = bio === ''

    if (isEmptyName) {
      setHasNameError(true)
    }
    if (isEmptyID) {
      setHasIDError(true)
    }
    if (isEmptyBio) {
      setHasBioError(true)
    }

    if (session) {
      fetch(SERVER_URL + "api/user/edit_profile", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': "application/json charset=utf-8",
        },
      body: JSON.stringify({
        "primary_user_id": session["primary_user_id"],
        "edited_profile": {
          "user_id": userid,
          "user_name": username,
          "bio": bio
        }
      })
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    // console.log(`UserName: ${username}`)
    // console.log(`UserID: ${userid}`)
    // console.log(`bio: ${bio}`)
  }

  const setProfile = (data: MyProfile) => {
    setName(data["user_profiles"][0][2])
    setID(data["user_profiles"][0][1])
    setBio(data["user_profiles"][0][4])
  }
  useEffect(() => {
    if (session) {
      fetch(SERVER_URL + "api/user/get_profile", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ "primary_user_id": session["primary_user_id"] })
      })
        .then((res) => res.json())
        .then((data) => setProfile(data))
    }
  }, [])
    
  return (
    <div>
      <Header title={'アカウント編集'} />
      <Stack>


        <Box component={'form'} sx={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }} onSubmit={handleSubmit}>
          <FaceIcon style={{marginTop: 25, marginLeft: -15}}/> 
          <TextField
            required
            fullWidth
            label="ユーザー名"
            value={username}
            error={hasNameError}
            onChange={inputName}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': {
                  borderColor: '#141D26',
                },
                '&:hover fieldset': {
                  borderColor: '#141D26',
                },
              },
              marginBottom: 3,
            }}
          />

          <ConfirmationNumberIcon style={{ marginLeft: -15 }}/> 
          <TextField
            required
            fullWidth
            inputProps={{ pattern: '^[a-zA-Z0-9_]+$' }}
            label="@ユーザーID"
            value={userid}
            error={hasIDError}
            onChange={inputID}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': {
                  borderColor: '#141D26',
                },
                '&:hover fieldset': {
                  borderColor: '#141D26',
                },
              },
              marginBottom: 3,
            }}
          />

          <BorderColorIcon style={{ marginLeft: -15 }}/> 
          <TextField
            required
            fullWidth
            multiline
            label="自己紹介 "
            value={bio}
            error={hasBioError}
            onChange={inputBio}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': {
                  borderColor: '#141D26',
                },
                '&:hover fieldset': {
                  borderColor: '#141D26',
                },
                
              },
              marginBottom: 5,
            }}
          />
        </Box>

        <Button type="submit" style={{ margin: 'auto', fontSize: '20px' }} onClick={() => handler('/profile')}>
           登録
        </Button>
      </Stack>
    </div>
  )
}

export default EditAccount
