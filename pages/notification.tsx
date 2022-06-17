import { NextPage } from "next";
import IconImage from "../public/SampleImage.jpg";
import backgroundImage from "../public/SampleImage2.jpg";
import ProfileModal from "../components/ProfileModal";
import Header from "../components/header";
import Footer from "../components/footer";
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemButton,
	Badge,
} from "@mui/material";
import {useState} from 'react';

type UserList = {
	id: number;
	name: string;
	preview: string;
	icon: string;
	background: string;
	userid: string;
	time: string;
};

const ChatIndex: NextPage = () => {

	const users: UserList[] = [
		{ id: 1, name: "橋本 環奈", userid:"@100_angel", preview: " さんがあなたをフォローしました", icon: IconImage.src, background: backgroundImage.src, time: "17:00"},
		{ id: 2, name: "永野 芽郁", userid:"@nagamo_mei", preview: " さんが1分前に暇になったようです", icon: IconImage.src, background: backgroundImage.src, time: "17:00"},
		{ id: 3,  name: "剛力 彩芽", userid:"@okanekubari", preview: " さんが1分前に暇になったようです", icon: IconImage.src, background: backgroundImage.src, time: "17:00"},
		{ id: 4, name: "なえなの", userid:"@naenano", preview: " さんが1分前に暇になったようです", icon: IconImage.src, background: backgroundImage.src, time: "17:00"},
		{ id: 5, name: "中野 二乃", userid:"@nakano_2", preview: " さんが1分前に暇になったようです", icon: IconImage.src, background: backgroundImage.src, time: "17:00"},
	]
	
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return(
		<div>
			<Header title={'通知'}/>
			{users.map((user: UserList) => {
				return (
					<>
						<List sx={{ width: '100%',bgcolor: '#fff'}} disablePadding>
							<ListItem alignItems="flex-start" disablePadding key={user.id}>
								<ListItemAvatar>
									<ListItemButton >
												<Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10 }} />
									</ListItemButton>
								</ListItemAvatar>
								<ListItemButton style={{paddingLeft: 0}}>
									<ListItemText
										primary={user.name }
											primaryTypographyProps={{
												fontWeight: 'medium',
												fontSize: "14px",
											}}
                                            
										secondary={user.preview}
											secondaryTypographyProps={{
												fontWeight: 'medium',
												fontSize: "12px",
											}}
									/> <span style={{ fontSize: 12, color:"#808080"}}> {user.time} </span>
								</ListItemButton>
							</ListItem>
						</List>
						</>
					)
				})}
				<ProfileModal
					open={open}
					handleClose={handleClose}
					name={'User Name'}
					icon={IconImage.src}
					background={backgroundImage.src}
					userid={"@user_id"}
					follow={123}
					follower={123}
				/>
			<Footer homeiconcolor="#808080" talkiconcolor="#808080" belliconcolor="#141D26" iconcolor="#808080"/>
		</div>
	)
}

export default ChatIndex