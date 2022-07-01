import { NextPage } from 'next'
import { Modal, Stack, Paper, InputBase, List, Avatar, Typography, Button, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import IconImage from '../public/SampleImage.jpg'
import { useEffect, useState } from 'react'

type UserList = {
  key:number
  id: number
  name: string
  icon: string
  userid: string
  select: boolean
}

interface Props {
  open: any
  handleClose: any
  background: string
  icon: string
  name: string
  userid: string
  follower: number
  follow: number
}

const AddFriendModal: NextPage<Props> = ({ open, handleClose, background, icon, name, userid, follower, follow }) => {
  const _users: UserList[] = [
    {
      key:-1,
      id: 1,
      name: 'python',
      icon: IconImage.src,
      userid: '@ume',
      select: true,
    }
  ]
    const [users, setUser] = useState<UserList[]>([
      
    ])
  const [txt, setText] = useState('')

    let oldtext = ''
  


  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        style={{
          alignItems: 'center',
          justifyContent: 'space-even',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          backgroundColor: 'white',
          borderRadius: 10,
          overflow: 'scroll',
        }}
      >
        <Box sx={{ width: '100%', bgcolor: '#fff', height: 50, borderRadius: 10 }}>
          <Typography style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold', paddingTop: 30 }}>友達一覧</Typography>
        </Box>

        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', height: 20, marginTop: 3, width: '90%' }} onChange={async (ev:any) => {
          if ('value' in ev.target) {
              if (oldtext != ev.target.value) {
                oldtext = ev.target.value
                setText('loading')
                await fetch("https://himathing.azurewebsites.net/api/user/search_user",
                  {// 送信先URL
                    method: 'post', // 通信メソッド
                    credentials: "include",
                    headers: {
                      'Content-Type': 'application/json charset=utf-8'
                    },
                    body: JSON.stringify({ 'text': ev.target.value })
                  }
                ).then(res => {
                  if (res.ok) {

                    return res.json()
                  }
                }).then(json => {
                  console.log(json)
                  let cnt = 0
                  users = []
                  setUser(users)
                  
                  json.forEach((e: any) => {
                    const user: UserList = {
                      key: cnt++,
                      id: e.primary_user_id,
                      name: e.user_name,
                      userid: e.user_id,
                      icon: IconImage.src,
                      select: true,
                    }
                    users.push(user)
                    setUser(users)
                    setText('')
                  
                  });

                }).catch((err) => console.error(`取得できませんでした：${err}`));
              }
            }
        }
          
        }>
          <SearchIcon />
          <InputBase sx={{ ml: 5, flex: 1 }} inputProps={{ 'aria-label': ' ' }} />
        </Paper>

        <Box sx={{ width: '100%', bgcolor: '#FFFFFF', marginTop: 1, maxHeight: 500 }}>
          {users.map((user: UserList) => {
            return (
              <List sx={{ width: '100%', bgcolor: '#FFFFFF', height: 60 }} key={user.id}>
                <Stack spacing={2} direction="row">
                  <Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10, marginLeft: 15 }} />
                  <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30, marginTop: 5 }}>{user.name}
                    <Typography style={{ fontSize:5 ,color:"#888888", marginTop:-2}}>@{user.userid}</Typography>
                  </Typography>
                  
                  <Button
                    variant="outlined"
                    style={{ marginLeft: 'auto', marginBottom: 20, fontSize: 12, height: 30, marginRight: 30, marginTop: 10 }}
                    onClick={async() => {
                      await fetch("https://himathing.azurewebsites.net/api/friend/send_friend_req",
                      {// 送信先URL
                        method: 'post', // 通信メソッド
                        credentials: "include",
                        headers: {
                        'Content-Type': 'application/json charset=utf-8'
                      },
                        body: JSON.stringify({ 'friend': user.id })
                      }
                     ).then(res => {
                      if (res.ok) {

                        return res.json()
                      }
                     }).then(json => {
                       console.log(json)
                       
                      })
                    }}
                  >
                    {' '}
                    つながる{' '}
                  </Button>
                </Stack>
              </List>
            )
          })}
        </Box>
      </Stack>
    </Modal>
  )
}

export default AddFriendModal
function forceUpdate() {
  throw new Error('Function not implemented.')
}

