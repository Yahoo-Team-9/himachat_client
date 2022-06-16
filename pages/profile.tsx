import type { NextPage } from 'next'
import Header from '../components/header'

import IconImage from "../public/SampleImage.jpg"
import BackgroundImage from "../public/SampleImage2.jpg"

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import {
    Stack,
    Button,
    Typography,
    ButtonGroup,
    Box
} from "@mui/material";

// 変数がいる -> 名前が大文字アルファベットになるの相談
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

    const setting = [
        <Button key="acount" style={{  width: 348, height: 50, background: "white", borderTopRadius: 10, borderBottomColor: "#c9caca"}}><span style={{ fontSize: 16, top: 120, color: "#000000"}}> アカウント設定 </span> <ArrowForwardIosRoundedIcon style={{ color: "#000000"}}/></Button>,
        <Button key="acount" style={{  width: 348, height: 50, background: "white", borderBottomColor: "#c9caca"}}><span style={{ fontSize: 16, top: 120, color: "#000000"}}> 公開設定</span> <ArrowForwardIosRoundedIcon style={{ color: "#000000"}}/></Button>,
        <Button key="acount" style={{  width: 348, height: 50, background: "white", borderBottomRadius: 10, borderBottomColor: "#c9caca"}}><span style={{ fontSize: 16, top: 120, color: "#ff0000"}}> ログアウト</span> </Button>
    ];
 

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
                            <Button variant="text" style={{ color: "#000000", fontSize: 14 }}>{user.followers} <span> フォロー</span> </Button>
                            <Button variant="text" style={{ color: "#000000", fontSize: 14 }}>{user.followed}  <span> フォロワー</span> </Button>
                        </Stack>

                        <span style={{ fontSize: 14, color: "#808080", paddingTop: 40, paddingRight: 300}}> 各種設定 </span>
                        <ButtonGroup orientation="vertical"
                            aria-label="vertical contained button group"
                            variant="text"> {setting}</ButtonGroup>


                    </Stack>

                )


            })}


        </div>
    );
}


export default Profile