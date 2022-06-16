import { NextPage } from "next";
import IconImage from "../public/SampleImage.jpg";
import backgroundImage from "../public/SampleImage2.jpg";
import ProfileModal from "../components/ProfileModal";
import Header from "../components/header";
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
	count: number;
	name: string;
	preview: string;
	icon: string;
	background: string;
	userid: string;
	follow: number;
	follower: number;
};

const ChatIndex: NextPage = () => {

	const users: UserList[] = [
		{ id: 1, count: 4, name: "橋本 環奈", userid:"@100_angel", preview: "やっほー、暇してる？", icon: IconImage.src, background: backgroundImage.src, follow: 123, follower: 123},
		{ id: 2, count: 10, name: "永野 芽郁", userid:"@nagamo_mei", preview: "ねね今暇？", icon: IconImage.src, background: backgroundImage.src, follow: 123, follower: 123},
		{ id: 3, count: 1, name: "剛力 彩芽", userid:"@okanekubari", preview: "暇なら会いたい！", icon: IconImage.src, background: backgroundImage.src, follow: 123, follower: 123},
		{ id: 4, count: 2, name: "なえなの", userid:"@naenano", preview: "飲み行かない？", icon: IconImage.src, background: backgroundImage.src, follow: 123, follower: 123},
		{ id: 5, count: 9, name: "中野 二乃", userid:"@nakano_2", preview: "会ってあげてもいいけど😠", icon: IconImage.src, background: backgroundImage.src, follow: 123, follower: 123}
	]
	
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [modalData, setModalData] = useState(null);

	return(
		<div>
			<Header title={'トーク一覧'}/>
			{users.map((user: UserList) => {
				return (
					<>
						<List sx={{ width: '100%',bgcolor: '#fff'}} disablePadding>
							<ListItem alignItems="flex-start" disablePadding key={user.id}>
								<ListItemAvatar>
									<ListItemButton onClick={handleOpen}>
										<Badge badgeContent={user.count} color="success" >
												<Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10 }} />
										</Badge>
									</ListItemButton>
								</ListItemAvatar>
								<ListItemButton style={{paddingLeft: 0}}>
									<ListItemText
										primary={user.name}
											primaryTypographyProps={{
												fontWeight: 'medium',
												fontSize: "14px",
											}}
										secondary={user.preview}
											secondaryTypographyProps={{
												fontWeight: 'medium',
												fontSize: "12px",
											}}
									/>
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
		</div>
	)
}

export default ChatIndex