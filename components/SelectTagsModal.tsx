import { NextPage } from "next";
import { Modal, Stack, Paper, IconButton, InputBase, List, Avatar, Input, Typography, Checkbox, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/header'
import IconImage from '../public/SampleImage.jpg'
import { Scale } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from 'react'
import { useCallback } from 'react'


type Tag = {
  tag_id: number
  tag_name: string
}

  
    
interface Props{
    open: any;
    handleClose: any;
}

const AZURE_URL = "https://himathing.azurewebsites.net/"
const LOCAL_URL = "http://localhost:8080/"
const SERVER_URL = AZURE_URL

const SelectTagsModal: NextPage<Props> = ({ open, handleClose }) => {
    const [tags, setTags] = useState<Tag[]>([])

    const [tagnameSearch, setNameSearch] = useState('')
    const inputNameSearch = useCallback(
    (event: any) => {
      const inputValue = event.target.value
      const isEmpty = inputValue === ''
      setNameSearch(inputValue)
    },
    [setNameSearch]
    ) 

    const [tagnameCreate, setNameCreate] = useState('')
    const inputNameCreate = useCallback(
    (event: any) => {
      const inputValue = event.target.value
      const isEmpty = inputValue === ''
      setNameCreate(inputValue)
    },
    [setNameCreate]
    ) 

    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    const handleSubmit = () => {
        fetch(SERVER_URL + "api/tag/search_tag", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': "application/json charset=utf-8",
            },
        body: JSON.stringify({"keyword": tagnameSearch})
        } )
        .then((res) => res.json())
            .then((data) => setTags(data["result"]))
        
    }
    const handleCreate = () => {
        fetch(SERVER_URL + "api/tag/create_tag", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': "application/json charset=utf-8",
            },
        body: JSON.stringify({"tag_name": tagnameCreate})
        } )
        .then((res) => res.json())
            .then((data) => console.log(data))
        setNameCreate("追加されました")
    }

    
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
        <Typography style={{ fontSize: 16,  textAlign:'center', fontWeight: 'bold', paddingTop:30 }}>タグ検索</Typography>
        </List>

        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', height: 20, marginTop: 3, width: '90%'}} >
        <SearchIcon />
        <InputBase sx={{ ml: 5, flex: 1 }} inputProps={{ 'aria-label': ' ' }} value={tagnameSearch} onChange={inputNameSearch} />
        <Button variant="outlined" style={{ color: '#DD5144', marginLeft: 'auto', borderColor: "#DD5144", marginBottom: 20, fontSize: 16, height:30, marginRight: 30, marginTop: 10 }} onClick={handleSubmit}>検索</Button>
        </Paper>
                
        <Box sx={{ width: '100%', height: 350, bgcolor: '#FFFFFF', overflowY: 'scroll', marginTop: 1 }}>
            {tags.map((tag: Tag) => {
                return (
            <List sx={{ width: '100%', bgcolor: '#FFFFFF', height: 60,}} key={tag.tag_id}  >
                <Stack spacing={2} direction="row" >
                        <Typography style={{ fontSize: 16, color: '#000000', marginLeft: 30, marginTop: 10 }}>{tag.tag_name}</Typography>
                        <Button variant="outlined" style={{ color: '#DD5144', marginLeft: 'auto', borderColor: "#DD5144", marginBottom: 20, fontSize: 16, height: 30, marginRight: 30, marginTop: 10 }} onClick={() => {
                    fetch(SERVER_URL + "api/tag/set_my_tag", {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                        'Content-Type': "application/json charset=utf-8",
                            },
                        body: JSON.stringify({"tag_id": tag.tag_id})
                        } )
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                }}>追加</Button>
                    {/* <Checkbox {...label} style={{marginLeft: 'auto',  marginRight: 20, color: '#4BB543'}} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} /> */}
                </Stack>
            </List>
            ) 
            })}  
            <List sx={{ width: '100%', bgcolor: '#fff', height: 50, borderRadius: 10 }} >
            <Typography style={{ fontSize: 16,  textAlign:'center', fontWeight: 'bold', paddingTop:30 }}>タグ作成</Typography>
            </List>        
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', height: 20, marginTop: 3, width: '90%'}} >
            <SearchIcon />
            <InputBase sx={{ ml: 5, flex: 1 }} inputProps={{ 'aria-label': ' ' }} id="message2" value={tagnameCreate} onChange={inputNameCreate} />
            <Button variant="outlined" style={{ color: '#DD5144', marginLeft: 'auto', borderColor: "#DD5144", marginBottom: 20, fontSize: 16, height:30, marginRight: 30, marginTop: 10 }} onClick={handleCreate}>作成</Button>
            </Paper>        
        </Box>
        
                
        </Stack>
        
            
    </Modal>
        
    )
}

export default SelectTagsModal