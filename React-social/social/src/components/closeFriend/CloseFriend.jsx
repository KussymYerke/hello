import "./closeFriend.css";

export default function CloseFriend({user}){
    return(
        <div>
            <li className="sidebarFriend">
                <img className="sideFriendImg" src={user.profilePicture}/>
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}