import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'

import {
    Stack,
    Button,
    List
} from "@mui/material";
import { width } from '@mui/system';

// 変数がいる -> 名前が大文字アルファベットになるの相談
type MyProfile = {
    user_name: any;
    user_id: any;
    follers: number;
    follered: number;
};


const Profile: NextPage = () => {


    const users: MyProfile[] = [
        { user_name: "User Name", user_id: "@user_id", follers: 999, follered: 999 },
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


            <Stack direction="row">
                {users.map((user: MyProfile) => {

                    return (
                        <Button variant="text" style={{color: "black", width: '100%', fontSize: 16}}>{user.user_name}</Button>
                    )
                })}
            </Stack>

            <Stack spacing={1} direction="row" >
                {users.map((user: MyProfile) => {

                    return (
                        <Button variant="text" style={{color: "#C0C0C0", width: '100%', fontSize: 14}}>{user.user_id}  </Button>
                    )
                })}
            </Stack>

            <br></br>

            {users.map((user: MyProfile) => {

                return (

                    <Stack spacing={0} direction="row" style={{alignItems: 'center',  justifyContent: "space-evenly"}} >
                        <Button variant="text" style={{color: "black", width: '100%', maxWidth: 120, fontSize: 14}}>{user.follers} フォロー </Button>
                        <Button variant="text" style={{color: "black", width: '100%', maxWidth: 120, fontSize: 14}}>{user.follered}  フォロワー </Button>
                    </Stack>
                )
            })}


        各種設定



        </div>
    );
}


export default Profile
