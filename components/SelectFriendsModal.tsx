import { NextPage } from "next";
import { Modal, Stack, Paper, IconButton, InputBase, List, Avatar, Badge, Typography, Checkbox, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/header'
import IconImage from '../public/SampleImage.jpg'
import { Scale } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';

type UserList = {
  id: number
  name: string
  icon: string
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

const SelectFriendsModal: NextPage<Props> = ({ open, handleClose, background, icon, name, userid, follower, follow }) => {
    
    const users: UserList[] = [
    {
      id: 1,
      name: 'python',
      icon: IconImage.src,
      select: true
    },
    {
      id: 2,
      name: 'java',
      icon: IconImage.src,
      select: true
        },
    {
      id: 3,
      name: 'C#',
      icon: IconImage.src,
      select: false
    },
    {
      id: 4,
      name: 'C++',
      icon: IconImage.src,
      select: false
        },
    {
      id: 5,
      name: 'Vue',
      icon: IconImage.src,
      select: false
    },
    {
      id: 6,
      name: 'C',
      icon: IconImage.src,
      select: false
        },
    {
      id: 7,
      name: 'pytorch',
      icon: IconImage.src,
      select: false
    },
    {
      id: 8,
      name: 'javaScript',
      icon: IconImage.src,
      select: false
    },
    {
      id: 9,
      name: 'HTML',
      icon: IconImage.src,
      select: true
    },
    {
      id: 10,
      name: 'css',
      icon: IconImage.src,
      select: false
        },
    {
      id: 11,
      name: 'TypeScript',
      icon: IconImage.src,
      select: false
        },
    {
      id: 12,
      name: 'Tensorflow',
      icon: IconImage.src,
      select: false
    },
    ]
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    
    return (
        
        <Modal open={open} onClose={handleClose}>
            
        <Stack style={{
            alignItems: 'center',
            justifyContent: "space-even",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "80%",
            backgroundColor: 'white',
            borderRadius: 10,
            }} >
        
        <List sx={{ width: '100%', bgcolor: '#fff', height: 50, borderRadius: 10 }} >
        <Typography style={{ fontSize: 16,  textAlign:'center', fontWeight: 'bold', paddingTop:30 }}>グループ</Typography>
        </List>

        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', height: 20, marginTop: 3, width: '9%'}} >
        <IconButton aria-label="menu">
        <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 5, flex: 1  }}  inputProps={{ 'aria-label': ' ' }} />
        </Paper>

         <List sx={{ width: '95%', bgcolor: '#F5F6F6', height: 50, marginTop: 2 ,overflowX: 'scroll'}} >
         <Stack direction="row" >
         {users.map((user: UserList) => {
            return (
            <Stack direction="row" key={user.id} >
            <Avatar alt="Icon" src={user.icon} style={{ borderRadius: 5, marginLeft: 15, height: 24, width: 24, marginTop: 5 }}  />
             <IconButton aria-label="cancel" >
           <CancelIcon fontSize="small" style={{ marginTop: -15, marginLeft: -18}} color='warning'/>
           </IconButton>
            </Stack> 
        )   
        })}
        </Stack> 
        </List>
                
        <Box sx={{ width: '100%', height: 350, bgcolor: '#FFFFFF', overflowY: 'scroll', marginTop: 1 }}>

        {users.map((user: UserList) => {
            return (
        <List sx={{ width: '100%', bgcolor: '#FFFFFF', height: 60,}} key={user.id}  >
        <Stack spacing={2} direction="row" >
            <Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10, marginLeft: 15}} />
            <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30, marginTop: 10 }}>{user.name}</Typography>
            <Checkbox {...label} style={{marginLeft: 'auto',  marginRight: 20, color: '#4BB543'}} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        </Stack>
        </List>
        ) 
        })}
                    
         </Box>

         <Button variant="outlined" style={{ color: '#DD5144', marginLeft: 'auto', borderColor: "#DD5144", marginBottom: 20, fontSize: 16, height:30, marginRight: 30, marginTop: 10 }}>作る</Button>
                    
        </Stack>
         </Modal>
        
    )
}

export default SelectFriendsModal