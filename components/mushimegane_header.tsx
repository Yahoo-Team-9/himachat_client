import type { NextPage } from 'next'
import { AppBar, Toolbar, Box, Typography, IconButton, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddFriendModal from '../components/AddFriendModal'
import IconImage from '../public/SampleImage.jpg'
import BackgroundImage from '../public/SampleImage2.jpg'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'

interface Props {
  title: String
}

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

  
const Header: NextPage<Props> = ({ title }) => {
  const [myProfile, setMyProfile] = useState<MyProfile>({ icon_path: './', user_profiles: [[]] })
  const [himaFriends, setHimaFriends] = useState<OthersNotification[]>([])
  const [friends, setFriends] = useState<OthersNotification[]>([])
  const [modalData, setModalData] = useState<OthersNotification>({
    friend_id: -1,
    friend: -1,
    user_id: '-1',
    login_at: new Date(),
    user_name: 'test',
    bio: 'aaa',
    tag_list: [],
    friend_list: [],
  })
  const [open, setOpen] = useState(false)
  // const handleOpen = (friend: OthersNotification) => {
  //   setOpen(true)
  //   setModalData(friend)
  // }
  const handleClose = () => setOpen(false)
  const { data: session } = useSession()


  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static" elevation={0} sx={{ borderBottom: 1, borderBottomColor: '#f5f6f6' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: 'bold' }} style={{ textAlign: 'center'}}>{title}</Typography>
        </Toolbar>
        <IconButton aria-label="search" size="large" style={{marginLeft: 'auto', marginTop: -55}}>
        <SearchIcon fontSize='inherit' onClick={() => { setOpen(true) }}/>
        </IconButton>
      </AppBar>
    </Box> 

    <AddFriendModal
      open={open}
      handleClose={handleClose}
      name={modalData.user_name}
      icon={IconImage.src}
      background={BackgroundImage.src}
      userid={modalData.user_id}
      follower={123}
      follow={123}
      />
    
    </div>
  )
}



export default Header
