import { NextPage } from 'next'
import Header from '../components/header'
import { TextField, Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { useCallback } from 'react'
import Router from 'next/router'

const handler = (path: any) => {
  Router.push(path)
}

const CreateAccount: NextPage = () => {
  const [username, setName] = useState('')
  const [userid, setID] = useState('')
  const [bio, setBio] = useState('')

  const [hasNameError, setHasNameError] = useState(false)
  const [hasIDError, setHasIDError] = useState(false)
  const [hasBioError, setHasBioError] = useState(false)

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

    console.log(`UserName: ${username}`)
    console.log(`UserID: ${userid}`)
    console.log(`bio: ${bio}`)
  }
  return (
    <div>
      <Header title={'アカウント登録'} />
      <Stack>
        <Box component={'form'} sx={{ margin: 5 }} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="ユーザーネーム"
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
              marginBottom: 5,
            }}
          />
          <TextField
            required
            fullWidth
            inputProps={{ pattern: '^[a-zA-Z0-9_]+$' }}
            label="ユーザーID"
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
              marginBottom: 5,
            }}
          />
          <TextField
            required
            fullWidth
            multiline
            label="bio"
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
          <Button type="submit" style={{ marginLeft: '100px', fontSize: '20px' }} color="success" onClick={() => handler('/top')}>
            登録
          </Button>
        </Box>
      </Stack>
    </div>
  )
}

export default CreateAccount
