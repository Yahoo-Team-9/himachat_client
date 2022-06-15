import type { NextPage } from 'next'
import Header from '../components/header'

import {
    Stack,
    Button,
    Typography
} from "@mui/material";

// 変数がいる -> 名前が大文字アルファベットになるの相談
type MyProfile = {
    id: number
    user_name: string;
    user_id: string;
    followers: number;
    followed: number;
};


const Profile: NextPage = () => {


    const users: MyProfile[] = [
        { id: 1, user_name: "User Name", user_id: "@user_id", followers: 999, followed: 999 },
    ]



    return (
        <div>
            <Header title={'プロフィール'} />


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {users.map((user: MyProfile) => {

                return (
                    <Stack style={{ alignItems: 'center', justifyContent: "space-even" }} key={user.id}>
                        <Typography style={{ fontSize: 16 }}>{user.user_name}</Typography>
                        <Typography style={{ color: "#808080", fontSize: 14 }}>{user.user_id}  </Typography>
                        <Stack direction="row" >
                            <Button variant="text" style={{ color: "black", fontSize: 14 }}>{user.followers} <span> フォロー</span> </Button>
                            <Button variant="text" style={{ color: "black", fontSize: 14 }}>{user.followed}  <span> フォロワー</span> </Button>
                        </Stack>
                    </Stack>
                )
            })}


        </div>
    );
}


export default Profile