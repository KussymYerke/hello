import "./topbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">NeFacebook</span>  
      </div>   
      <div className="topbarCenter">
        <div className="searchbar">
          <Search/>
          <input placeholder="Search for posts, friend, and etc." className="searchInput"/>
        </div>
      </div>  
      <div className="topbarRight">
        <div className="topbarLink">Homepage</div>
        <div className="topbarLink">Timeline</div>
      </div>  
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/iran.jpg" alt="" className="topbarImg" />
    </div>
  )
}
