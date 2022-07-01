import { NextPage } from "next";
import { Modal, Stack, Button, Typography, List } from "@mui/material";


interface Props{
    open: any;
    handleClose: any;
    background: string;
    icon: string;
    name: string;
    userid: string;
    friendNumber: number;
    isFriend: boolean;
    primary_user_id: number;
}

const AZURE_URL = "https://himathing.azurewebsites.net/"
const LOCAL_URL = "http://localhost:8080/"
const SERVER_URL = AZURE_URL

const NinsyouModal: NextPage<Props> = ({ open, handleClose, background, icon, name, userid, friendNumber, isFriend, primary_user_id }) => {
    const handleFriendRequest = () => {
        fetch(SERVER_URL + "api/friend/send_friend_req", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': "application/json charset=utf-8",
        },
      body: JSON.stringify({
        "friend": primary_user_id
      })
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    return (
        <>
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
                    borderRadius: 10
                }} >
                    
                    <List sx={{ width: '100%', bgcolor: '#fff', height: 50, borderRadius: 10 }} >
                    <Typography style={{ fontSize: 16,  textAlign:'center', fontWeight: 'bold', paddingTop:10 }}>友達申請が来ました</Typography>
                    </List>
                    
                    <img src={`${background}`} style={{width:'75%',borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 100 }} />
                    <img alt="Icon" src={icon} style={{ width: 100, height: 100, borderRadius: 90, top: 95, position: 'absolute'}} />
                    <Typography style={{ fontSize: 16 , marginTop: 60}}>{name}</Typography>
                    <Typography style={{ color: "#808080", fontSize: 14 }}>{userid}  </Typography>
                    
                    <Stack direction="row" spacing={1}>
                        <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{friendNumber} <span>人の友達</span> </Button>
                    </Stack>
                    <Stack direction="row" spacing={5} style={{ margin: 20 }}>
                    <Button variant="outlined" style={{ fontWeight:'bold', color:"#DD5144", borderColor: "#DD5144", fontSize: 14 }} onClick={handleFriendRequest}>許可 </Button> 
                    <Button variant="outlined" style={{ fontWeight:'bold', color:"#DD5144", borderColor: "#DD5144", fontSize: 14 }} onClick={handleFriendRequest}>拒否 </Button>  
                    </Stack>
                    

                </Stack>
            </Modal>
        </>
    )
}

export default NinsyouModal