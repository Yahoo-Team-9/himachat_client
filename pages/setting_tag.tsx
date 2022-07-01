import { NextPage } from 'next'
import IconImage from '../public/SampleImage.jpg'
import Header from '../components/header'
import Footer from '../components/footer'
import { List, ListItem, Avatar, ListItemButton, Stack, Typography, Checkbox, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import SelectTagsModal from '../components/SelectTagsModal'
import BackgroundImage from '../public/SampleImage2.jpg'
import GroupIcon from '@mui/icons-material/Group';
import { useSession, signIn } from 'next-auth/react'


type Tag = {
  tag_id: number
  tag_name: string
}

const AZURE_URL = 'https://himathing.azurewebsites.net/'
const LOCAL_URL = 'http://localhost:8080/'
const SERVER_URL = AZURE_URL

const ChatIndex: NextPage = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { data: session } = useSession()
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        if (session) {
        fetch(SERVER_URL + 'api/tag/get_tag_list', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ primary_user_id: session["primary_user_id"] }),
        })
            .then((res) => res.json())
            .then((data) => setTags(data["tag_list"]))
        }
    })

        
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div>
        <Header title={'タグ設定'} />

        <ListItemButton onClick={handleOpen} sx={{ width: '100%', bgcolor: '#fff', height: 60 }} >
            <GroupIcon style={{ marginLeft: 5, fontSize: 30 }}/>
            <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 20 }}>タグを追加</Typography>
        </ListItemButton>

        {tags.map((tag: Tag) => {
            return (
            <List sx={{ width: '100%', bgcolor: '#fff', height: 60 }} key={tag.tag_id} >
                <Stack spacing={2} direction="row">
                    <ListItem style={{ paddingLeft: 0, height: 50}}>
                    <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30 }}>{tag.tag_name}</Typography>
                    <Button variant="outlined" style={{ color: '#DD5144', marginLeft: 'auto', borderColor: "#DD5144", marginBottom: 20, fontSize: 16, height: 30, marginRight: 30, marginTop: 10 }} onClick={() => {
                    fetch(SERVER_URL + "api/tag/unset_my_tag", {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                        'Content-Type': "application/json charset=utf-8",
                            },
                        body: JSON.stringify({"tag_id": tag.tag_id})
                        } )
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                }}>削除</Button>
                </ListItem>
                </Stack>
                </List>
            ) 
        })}
        
        <SelectTagsModal
            open={open}
            handleClose={handleClose}
            />

        
        <Footer homeiconcolor="#808080"  belliconcolor="#808080" iconcolor="#141D26" />
        </div>
    )
}

export default ChatIndex