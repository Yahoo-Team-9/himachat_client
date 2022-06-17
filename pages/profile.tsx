import type { NextPage } from 'next'
import Header from '../components/header'

import IconImage from "../public/SampleImage.jpg"
import BackgroundImage from "../public/SampleImage2.jpg"

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import Router from 'next/router'

import {
    Stack,
    Button,
    Typography,
    ButtonGroup,
    Box,
    ListItemButton,
    ListItemText,
    Divider,
    Paper
} from "@mui/material";

type MyProfile = {
    id: number
    user_name: string;
    user_id: string;
    followers: number;
    followed: number;
    icon: string;
    background: string;
};


const Profile: NextPage = () => {


    const users: MyProfile[] = [
        { id: 1, user_name: "User Name", user_id: "@user_id", followers: 999, followed: 999, icon: IconImage.src, background: BackgroundImage.src },
    ]

    const handler = (path: any) => {
        Router.push(path)
      }


    return (
        <div>
            <Header title={'プロフィール'} />
            

            {users.map((user: MyProfile) => {

                return (

                    <Stack style={{ alignItems: 'center', justifyContent: "space-even" }} key={user.id}>
                        <img src={`${user.background}`} style={{ width: 428, height: 120 }} />
                        <img alt="Icon" src={user.icon} style={{ width: 120, height: 120, borderRadius: 90, top: 120, position: 'absolute' }} />

                        <Typography style={{ fontSize: 16, paddingTop: 70 }}>{user.user_name}</Typography>
                        <Typography style={{ color: "#808080", fontSize: 14 }}>{user.user_id}  </Typography>
                        <Stack direction="row" >
                            <Button variant="text" style={{ color: "#141d26", fontSize: 14 }} onClick={()=>handler('/follow')}>{user.followers} <span> フォロー</span> </Button>
                            <Button variant="text" style={{ color: "#141d26", fontSize: 14 }} onClick={()=>handler('/follower')}>{user.followed}  <span> フォロワー</span> </Button>
                        </Stack>

                        <span style={{ fontSize: 14, color: "#808080", paddingTop: 40, paddingRight: 300}}> 各種設定 </span>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': {m: 1, width: 128, height: 128}}} >
                        <Paper elevation={0}  style={{background: "#ffffff", width: 348, height: 150, borderRadius:10}} /> </Box>

                        <ListItemButton divider style={{ width: 328, height: 50, top: -158}} onClick={()=>handler('/account-setting')}> 
                        <ListItemText primary="アカウント設定" style={{fontSize: 14, color: "#141d26"}}/>
                        <ArrowForwardIosRoundedIcon style={{ width: 24, height: 24, color: "#141d26"}}/>
                        </ListItemButton>
                        <ListItemButton divider style={{background: "#ffffff", width: 328, height: 50, top: -158}} onClick={()=>handler('/release-member')}> 
                        <ListItemText primary="公開設定" style={{fontSize: 14, color: "#141d26" }}/>
                        <ArrowForwardIosRoundedIcon style={{ width: 24, height: 24, color: "#141d26"}}/>
                        </ListItemButton>
                        <Divider />

                        <ListItemButton style={{width: 328, height: 50, borderRadius:10, top: -159}} onClick={()=>handler('/logout')}> 
                        <ListItemText primary="ログアウト" style={{fontSize: 14, color: "#dd5144" }}/>
                        </ListItemButton>


                    </Stack>

                )
            })}

        </div>
    );
}


export default Profile