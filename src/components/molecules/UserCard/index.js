import React from 'react'

const UserCard = ({avatar, name, email, repos, followers, following}) => {
    return (
            <div className="profile-user">
        <img src={avatar} className="avatar" alt="logo" />
        <p>{name}</p>
        <p>{email}</p>
        <div className="detail-repos">
          <div className="repos">
            <p>Repos</p>
            <p>{repos}</p>
          </div>
          <div className="repos">
            <p>followers</p>
            <p>{followers}</p>
          </div>
          <div className="repos">
            <p>following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    )
}

export default UserCard
