import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import {Users} from "../../dummyData";

export default function Sidebar() {
  return (
    <div className="sidebar"> 
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="siderbarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>  
          </li>
          <li className="siderbarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>  
          </li>
          <li className="siderbarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>  
          </li>
          <li className="siderbarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>  
          </li>
          <li className="siderbarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>  
          </li>
          <li className="siderbarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>  
          </li>
          <li className="siderbarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>  
          </li>
          <li className="siderbarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>  
          </li>
          <li className="siderbarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>  
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map(u=>(
              <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
