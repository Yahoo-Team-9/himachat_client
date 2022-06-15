import { NextPage } from "next";
import { useState } from "react";
import { Modal } from "@mui/material";

const ProfileModal: NextPage = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
        </>
    )
}

export default ProfileModal