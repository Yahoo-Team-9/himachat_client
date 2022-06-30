import { NextPage } from 'next'
import IconImage from '../public/SampleImage.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import { List, ListItem, Avatar, ListItemText, Radio, FormControlLabel, Stack, Typography, RadioGroup } from '@mui/material'
import { useState } from 'react'

type UserList = {
  id: number
  count: number
  name: string
  icon: string
}

const ChatIndex: NextPage = () => {
  const users: UserList[] = [
    {
      id: 1,
      count: 5,
      name: 'カスタム設定1',
      icon: IconImage.src,
    },
    {
      id: 2,
      count: 5,
      name: 'カスタム設定2',
      icon: IconImage.src,
    },
  ]


  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Header title={'公開設定'} />

      <List sx={{ width: '100%', bgcolor: '#fff', height: 60 }} >
           <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30, paddingTop: 10, fontWeight: 'bold' }}>全てのフォロワー</Typography>
      </List>

     {users.map((user: UserList) => {
        return (
          <List sx={{ width: '100%', bgcolor: '#fff', height: 60 }} key={user.id} >
            <Stack spacing={2} direction="row">
                <Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10, marginLeft: 15}} />
                <ListItem style={{ paddingLeft: 0 }}>
                <Typography style={{ fontSize: 14, color: '#ffffff', marginLeft: -45 }}>+{user.count}</Typography>
                <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30 }}>{user.name}</Typography>
              </ListItem>
              </Stack>
            </List>
        ) 
     })}

      
      <Footer homeiconcolor="#808080"  belliconcolor="#808080" iconcolor="#141D26" />
    </div>
  )
}

export default ChatIndex