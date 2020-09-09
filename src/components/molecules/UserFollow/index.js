import React from 'react'
import './userData.scss'

const  UserReposList = ({data}) => {
    return (
			<ul >
				{data.map(({ id, full_name, stargazers_count, html_url }) => (
						
					<li key={id} className='repos-list'>
						<div className='user-repos-stars'>
						<h3><a className='user-repos-name' href={html_url}>{full_name}</a></h3>
							<i class="fas fa-star"></i>
							{stargazers_count}
						</div>
					</li>
						
				))}
			</ul>
    )
}
const UserFollowList = ({data}) => {
    return (
			<ul>
				{data.map(({ id, login, avatar_url, html_url, repos_url }) => (
					<li key={id} className="row">
							<img className='user-data-img' src={avatar_url} alt="avtr" />
							<div className="follow-details">
								<h4><a className='user-data-login' href={html_url}>{login}</a></h4>
								<p>repos: {repos_url}</p> 
							</div>
					</li>
				))}
			</ul>
    )
}

const UserFollow = ({data, type}) => {

    if (type === 'repo') {
			return <UserReposList data={data} />
    }
    return (
			<div className='user-data-grid'>
				<div className="data-wrapper">
					<UserFollowList data={data} />
				</div>
			</div>
    )
}

export default UserFollow
