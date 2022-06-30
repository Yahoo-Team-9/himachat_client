import { NextPage } from "next";
import { Modal, Stack, Button, Typography, Box } from "@mui/material";


interface Props{
    open: any;
    handleClose: any;
    background: string;
    icon: string;
    name: string;
    userid: string;
    friendNumber: number;
    bio: string;
    tag_list: string[];
    isFriend: boolean;
    // follower: number;
    // follow: number
}

const ProfileModal: NextPage<Props> = ({open, handleClose, background, icon, name, userid, friendNumber, bio, tag_list, isFriend}) => {
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
                    <Typography style={{ color: "#808080", fontSize: 14 }}>{bio}  </Typography>
                    <Typography style={{ color: "#808080", fontSize: 14 }}>{tag_list}  </Typography>
                    {/* {tag_list.map((tag: string) => (
                        <Typography style={{ color: "#808080", fontSize: 14 }}>{tag}  </Typography>
                    ))} */}
                    
                    <Stack direction="row" spacing={1}>
                        <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{friendNumber} <span> 友達</span> </Button>
                        {/* <Button variant="text" style={{ color: "#141D26", fontSize: 14 }}>{follow}  <span> フォロワー</span> </Button> */}
                    </Stack>
                    <Stack direction="row" spacing={5} style={{ margin: 20 }}>
                        {isFriend ? (
                        <Button variant="outlined" style={{ fontWeight:'bold', color:"#DD5144", borderColor: "#DD5144", fontSize: 14 }}>LINEへ </Button>  
                        ): (
                        <Button variant="outlined" style={{ fontWeight:'bold', color:"#DD5144", borderColor: "#DD5144", fontSize: 14 }}>友達追加 </Button>  
                        )}
                    </Stack>
                    

                </Stack>
            </Modal>
        </>
    )
}

export default ProfileModal