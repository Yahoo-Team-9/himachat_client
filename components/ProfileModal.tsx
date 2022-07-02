import { NextPage } from 'next'
import { Modal, Stack, Button, Typography, Box, Chip } from '@mui/material'
import Router from 'next/router'
import Icon1 from '../public/abe.png'
import Icon2 from '../public/suekane.png'
import Icon3 from '../public/noguchi.png'
import Icon4 from '../public/walle.png'
import Icon5 from '../public/SampleImage.jpg'

interface Props {
  open: any
  handleClose: any
  background: string
  icon: string
  name: string
  userid: string
  friendNumber: number
  bio: string
  tag_list: string[]
  isFriend: boolean
  primary_user_id: number
  // follower: number;
  // follow: number
}

const handler = (path: any) => {
  Router.push(path)
}

const AZURE_URL = 'https://himathing.azurewebsites.net/'
const LOCAL_URL = 'http://localhost:8080/'
const SERVER_URL = AZURE_URL

const ProfileModal: NextPage<Props> = ({
  open,
  handleClose,
  background,
  icon,
  name,
  userid,
  friendNumber,
  bio,
  tag_list,
  isFriend,
  primary_user_id,
}) => {
  const handleFriendRequest = () => {
    fetch(SERVER_URL + 'api/friend/send_friend_req', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json charset=utf-8',
      },
      body: JSON.stringify({
        friend: primary_user_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <>
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
          }}
        >
          <img src={`${background}`} style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 120 }} />
          {(name.length % 5 == 1) &&<img src={Icon1.src} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute' }} />}
            {(name.length % 5 == 0) &&<img src={Icon2.src} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute' }}/>}
            {(name.length % 5 == 2) && <img src={Icon3.src} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute' }}/>}
            {(name.length % 5 == 3) && <img src={Icon4.src} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute' }} />}
          {/* <img alt="Icon" src={icon} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute' }} /> */}
          <Typography style={{ fontSize: 16, marginTop: 60 }}>{name}</Typography>
          <Typography style={{ color: '#808080', fontSize: 14 }}>
            <span>@</span>
            {userid}{' '}
          </Typography>
          <Typography style={{ color: '#808080', fontSize: 14 }}>{bio} </Typography>
          <Chip label={tag_list} style={{ color: '#808080', fontSize: 14 }} />
          {/* {tag_list.map((tag: string) => (
                        <Typography style={{ color: "#808080", fontSize: 14 }}>{tag}  </Typography>
                    ))} */}

          <Stack direction="row" spacing={1}>
            <Button variant="text" style={{ color: '#141D26', fontSize: 14 }}>
              {friendNumber} <span> 友達</span>{' '}
            </Button>
            {/* <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{follow}  <span> フォロワー</span> </Button> */}
          </Stack>
          <Stack direction="row" spacing={5} style={{ margin: 20 }}>
            {isFriend ? (
              <Button
                variant="contained"
                color="success"
                style={{ fontWeight: 'bold', fontSize: 14 }}
                onClick={() => handler('https://line.me/R/share?text=%E4%BB%8A%E6%9A%87%EF%BC%9F')}
              >
                LINEへ{' '}
              </Button>
            ) : (
              <Button
                variant="outlined"
                style={{ fontWeight: 'bold', color: '#DD5144', borderColor: '#DD5144', fontSize: 14 }}
                onClick={handleFriendRequest}
              >
                友達追加{' '}
              </Button>
            )}
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}

export default ProfileModal
