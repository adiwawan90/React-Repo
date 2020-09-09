import React from 'react'

const UserCard = ({avatar, name, email, repos, followers, following, getRepos, getFollowers, getFollowing}) => {
    return (
        <div className="profile-user">
        <img src={avatar} className="avatar" alt="logo" />
        <p>{name}</p>
        <p>{email}</p>
        <div className="detail-repos">
          <div className="repos" onClick={() => getRepos()}>
            <p>Repos</p>
            <p>{repos}</p>
          </div>
          <div className="repos" onClick={() => getFollowers()}>
            <p>followers</p>
            <p>{followers}</p>
          </div>
          <div className="repos" onClick={() => getFollowing()}>
            <p>following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    )
}

export default UserCard
