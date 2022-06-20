import { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";

const Notification: NextPage = () => {
    return (
        <div>
            <Header title={'フォロー中'}/>
            <span>Notification Page</span>
            <Footer homeiconcolor="#808080" talkiconcolor="#808080" belliconcolor="#141D26" iconcolor="#808080"/>
        </div>
    )
}

export default Notification