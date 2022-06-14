import { NextPage } from "next";
import IconImage from "../public/SampleImage.jpg"
import Header from "../components/header";
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemButton,
	Box,
	Badge
} from "@mui/material";

type UserList = {
	id: number;
	count: number;
	name: string;
	preview: string;
  icon: string;
};

const ChatIndex: NextPage = () => {

	const users: UserList[] = [
		{ id: 1, count: 4, name: "橋本 環奈", preview: "やっほー、暇してる？", icon: IconImage.src},
		{ id: 2, count: 10, name: "永野 芽郁", preview: "ねね今暇？", icon: IconImage.src},
		{ id: 3, count: 1, name: "剛力 彩芽", preview: "暇なら会いたい！", icon: IconImage.src},
    　　　　　　　　　　　　　　　　　　　　　　　　{ id: 4, count: 2, name: "なえなの", preview: "飲み行かない？", icon: IconImage.src},
		{ id: 5, count: 9, name: "中野 二乃", preview: "会ってあげてもいいけど😠", icon: IconImage.src}
	]

	return(
		<div>
			<Header title={'トーク一覧'}/>
			<List sx={{ width: '100%',bgcolor: '#fff'}} disablePadding>
				{users.map((user: UserList) => {
					return (
						<ListItem alignItems="flex-start" disablePadding key={user.id}>
							<ListItemButton>
								<ListItemAvatar >
									<Badge badgeContent={user.count} color="success" >
										<Avatar alt="Icon" src={user.icon} style={{ borderRadius: 10 }} />
									</Badge>
								</ListItemAvatar>
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
					)
				})}
			</List>
		</div>
	)
}

export default ChatIndex
