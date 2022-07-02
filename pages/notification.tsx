import { NextPage } from 'next'
import IconImage from '../public/SampleImage.jpg'
import backgroundImage from '../public/SampleImage2.jpg'
import NinsyouModal from '../components/NinsyouModal'
import Header from '../components/header'
import Footer from '../components/footer'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton, Stack, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'

type UserList = {
  key:number
  id: number
  name: string
  preview: string
  icon: string
  background: string
  notification_type:number
  userid: string
  time: string
}



const setNotificationIndex = (new_user: UserList, old_users: UserList[]) => {
  if (old_users[0].id == -1) {
      old_users = [new_user] 
  } else {
      old_users.push(new_user)
  }
  console.log(old_users)
  return old_users
}
let _users: UserList[] = [{
      key:-1,
      id: -1,
      name: '',
      userid: '',
      preview: ' 通知がありません',
      icon: '',
      notification_type: -1,
      background: backgroundImage.src,
      time: '',
    }]

const ChatIndex: NextPage = () => {
  const [state_users,setusers] = useState<UserList[]>(_users)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [modalData, setModalData] = useState<UserList>({
      key:-1,
      id: -1,
      name: '',
      userid: '',
      preview: ' 通知がありません',
      icon: '',
      notification_type: -1,
      background: backgroundImage.src,
      time: '',
  })


  const { data: session } = useSession()
  if (session) {
    useEffect(() => {
      fetch('https://himathing.azurewebsites.net/api/notification/get_pull_notification', {// 送信先URL
    method: 'get', // 通信メソッド
        credentials: "include",
    headers: {
      'Content-Type': 'application/json charset=utf-8'
    }
      }).then((res) => {
        if (res.ok) {
          return res.json()
        } 
      }).then((json) => {
        let cnt: number = 0;
        console.log(json)
        json.forEach((notification_elem: any) => {
          console.log(notification_elem)
        if (notification_elem.notification_type == 0) {
          //フレンドリクエストが送られた時
          const userlist: UserList = {
            key: cnt++,
            userid: '',
            id: notification_elem.partner_user_id,
            name: notification_elem.partner_user_name,
            preview: `${notification_elem.partner_user_name} さんが友達申請しました。`,
            icon: '',
            notification_type: 0,
            background: backgroundImage.src,
            time: notification_elem.created_at
          }
          _users = setNotificationIndex(userlist,_users)

        } else if(notification_elem.notification_type == 1) {
          //リクエストが認証された時
          const userlist: UserList = {
            key: cnt++,
            userid: '',
            id: notification_elem.partner_user_id,
            name: notification_elem.partner_user_name,
            preview: `${notification_elem.partner_user_name} さんが友達リクエストの承認しました。`,
            icon: '',
            notification_type: 1,
            background: backgroundImage.src,
            time: notification_elem.created_at
          }
           _users = setNotificationIndex(userlist,_users)

        } else if (notification_elem.notification_type == 2) {
          //暇通知
          const userlist: UserList = {
            key: cnt++,
            userid: '',
            id: notification_elem.partner_user_id,
            name: notification_elem.partner_user_name,
            preview: `${notification_elem.partner_user_name} さんが暇になりました。`,
            icon: '',
            notification_type: 2,
            background: backgroundImage.src,
            time: notification_elem.created_at
          }
          _users = setNotificationIndex(userlist,_users)
        } else {
            const userlist: UserList = {
            key: cnt++,
            userid: '',
            id: notification_elem.partner_user_id,
            name: notification_elem.partner_user_name,
            preview: `${notification_elem.partner_user_name} `,
            icon: '',
            notification_type: 3,
            background: backgroundImage.src,
            time: notification_elem.created_at
          }
         _users = setNotificationIndex(userlist,_users)
        }
        });
        setusers(_users)
    }).catch((err) => console.error(`取得できませんでした：${err}`));
    },)
    return (
      <div>
        <Header title={'通知'} />
        {_users.map((user: UserList) => {
          return (
            <>
              <List sx={{ width: '100%', bgcolor: '#fff' }} disablePadding>
                <ListItem alignItems="flex-start" disablePadding key={user.id}>
                  <ListItemAvatar>
                    <ListItemButton>
                      <Avatar alt="Icon"  style={{ borderRadius: 10 }} />
                    </ListItemButton>
                  </ListItemAvatar>
                  <ListItemButton style={{ paddingLeft: 0 }} onClick={async () => {
                    if (user.notification_type === 0) {
                      setOpen(true)
                      await fetch('https://himathing.azurewebsites.net/api/user/get_profile', {// 送信先URL
                        method: 'post', // 通信メソッド
                        credentials: "include",
                        headers: {
                          'Content-Type': 'application/json charset=utf-8'
                        },
                        body: JSON.stringify({ 'primary_user_id': user.id })
                      }).then(res => {
                        if (res.ok) {
                          return res.json()
                          } 
                        }
                      ).then(json => {
                        console.log(json)
                        user.userid = json.user_profiles[0][1]
                        user.name = json.user_profiles[0][2]
                        setModalData(user)
                      }).catch((err) => console.error(`取得できませんでした：${err}`));
                    }
                    
                  }}>
                    <ListItemText
                      primary={user.name}
                      primaryTypographyProps={{
                        fontWeight: 'medium',
                        fontSize: '14px',
                      }}
                      secondary={user.preview}
                      secondaryTypographyProps={{
                        fontWeight: 'medium',
                        fontSize: '12px',
                      }}
                    />{' '}
                    <span style={{ fontSize: 12, color: '#808080' }}> {user.time} </span>
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          )
        })}
        
        <NinsyouModal
          open={open}
          handleClose={handleClose}
          background={backgroundImage.src}
          icon={IconImage.src}
          friendNumber={-1}
          name={modalData.name}
          userid={modalData.userid}
          isFriend={false}
          primary_user_id={modalData.id}
        />
        <Footer homeiconcolor="#808080" belliconcolor="#141D26" iconcolor="#808080" />
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

export default ChatIndex
