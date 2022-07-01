import { NextPage } from "next";
import { Modal, Stack, Paper, InputBase, List, Avatar, Typography, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconImage from '../public/SampleImage.jpg'

type UserList = {
  id: number
  name: string
  icon: string
  userid: string
  select: boolean
}
  
    
interface Props{
    open: any;
    handleClose: any;
    background: string;
    icon: string;
    name: string;
    userid: string;
    follower: number;
    follow: number
}

const AddFriendModal: NextPage<Props> = ({ open, handleClose, background, icon, name, userid, follower, follow }) => {
    
    const users: UserList[] = [
    {
      id: 1,
      name: 'python',
      icon: IconImage.src,
      userid: '@ume',
      select: true
    },
    {
      id: 2,
      name: 'java',
        icon: IconImage.src,
      userid: '@0kaka',
      select: true
        },
    {
      id: 3,
      name: 'C#',
        icon: IconImage.src,
      userid: '@kimuchI',
      select: false
    },
    {
      id: 4,
      name: 'C++',
        icon: IconImage.src,
      userid: '@k0nbU',
      select: false
        },
    {
      id: 5,
      name: 'Vue',
        icon: IconImage.src,
      userid: '@syake',
      select: false
    },
    {
      id: 6,
      name: 'C',
        icon: IconImage.src,
      userid: '@27',
      select: false
        },
    {
      id: 7,
      name: 'pytorch',
     icon: IconImage.src,
      userid: '@s0lt',
      select: false
    },
    {
      id: 8,
      name: 'javaScript',
        icon: IconImage.src,
      userid: '@noRi',
      select: false
    },
    {
      id: 9,
      name: 'HTML',
        icon: IconImage.src,
      userid: '@UmEoKaKa',
      select: true
    },
    {
      id: 10,
      name: 'css',
      icon: IconImage.src,
      userid: '@KATSUO',
      select: false
        },
    {
      id: 11,
      name: 'TypeScript',
      icon: IconImage.src,
      userid: '@sio',
      select: false
        },
    {
      id: 12,
      name: 'Tensorflow',
      icon: IconImage.src,
      userid: '@nAtto',
      select: false
    },
    ]
    
    return (
        
        <Modal open={open} onClose={handleClose} >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: 10}}>
            <Stack 
            style={{ 
            alignItems: 'center',
            justifyContent: "space-even",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "80%",
            backgroundColor: 'white',
            borderRadius: 10,
            }} 
            >
        
        <Box sx={{ width: '100%', bgcolor: '#fff', height: 50, borderRadius: 10 }} >
        <Typography style={{ fontSize: 16,  textAlign:'center', fontWeight: 'bold', paddingTop:30 }}>友達一覧</Typography>
        </Box>

        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', height: 20, marginTop: 3, width: '90%'}} >
        <SearchIcon />
         <InputBase sx={{ ml: 5, flex: 1 }} inputProps={{ 'aria-label': ' ' }} />        
        </Paper>
       
        <Box sx={{ width: '100%', bgcolor: '#FFFFFF', marginTop: 1, height: 100 }}>
        {users.map((user: UserList) => {
            return (
        <List sx={{ width: '100%', bgcolor: '#FFFFFF', height: 60}} key={user.id}  >
        <Stack spacing={2} direction="row" >
           <Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10, marginLeft: 15}} />
           <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30, marginTop: 10 }}>{user.name}</Typography>
           <Button variant="outlined" style={{ marginLeft: 'auto', marginBottom: 20, fontSize: 12,  height:30, marginRight: 30, marginTop: 10 }}> つながる </Button>
        </Stack>
        </List>
        ) 
        })}      
         </Box>         
        </Stack>
        </Box>
            
         </Modal>
        
    )
}

export default AddFriendModal