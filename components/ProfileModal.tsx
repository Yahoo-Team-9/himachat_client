import { NextPage } from "next";
import { Modal, Stack, Button, Typography, Box } from "@mui/material";

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

const ProfileModal: NextPage<Props> = ({open, handleClose, background, icon, name, userid, follower, follow}) => {
    
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
                    <img src={`${background}`} style={{width:'100%',borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 120 }} />
                    <img alt="Icon" src={icon} style={{ width: 120, height: 120, borderRadius: 90, top: 60, position: 'absolute'}} />
                    <Typography style={{ fontSize: 16 , marginTop: 60}}>{name}</Typography>
                    <Typography style={{ color: "#808080", fontSize: 14 }}>{userid}  </Typography>
                    <Stack direction="row" spacing={1}>
                        <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{follower} <span> フォロー</span> </Button>
                        <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{follow}  <span> フォロワー</span> </Button>
                    </Stack>
                    <Stack direction="row" spacing={5} style={{margin: 20}}>
                        <Button variant="outlined" style={{ fontWeight:'bold', color:"#DD5144", borderColor: "#DD5144", fontSize: 14 }}>フォロー </Button>
                        <Button variant="contained" style={{ fontWeight:'bold',backgroundColor: "#DD5144", fontSize: 14 }}>トーク</Button>
                    </Stack>
                    

                </Stack>
            </Modal>
        </>
    )
}

export default ProfileModal