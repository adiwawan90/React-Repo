import React, {useState} from 'react';
import './App.scss';
import { SearchBox, Button, UserCard, UserFollow, Loading } from '../components';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [datas, setDatas] = useState(null)
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [repos, setRepos] = useState([])
  
  const getUser = () => {
    setFollowers([]);
    setFollowing([]);
    setRepos([]);

    setIsLoading(true);
     
    
    fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);

      setDatas(data);
    })
    
  }

  const getFollowers = () => {
    setIsLoading(true);
    
    fetch(`https://api.github.com/users/${name}/followers`)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);

      setFollowers(data);
      setFollowing([]);
      setRepos([]);
    })
    
  }

  const getRepos = () => {
    setIsLoading(true);
    
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);

      setRepos(data);
      setFollowers([]);
      setFollowing([]);
    })
   
  }

  const getFollowing = () => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${name}/following`)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);

      setFollowing(data);
      setFollowers([]);
      setRepos([]);
    })
    
  }

  const MyComponent = ()=> {
    if (datas !== null) {
      if (datas.message !== undefined ) {
        return <h2>Repository Not Found</h2>
      } else {
        return <UserCard 
          avatar={datas.avatar_url} 
          name={datas.name}
          email={datas.email}
          repos={datas.public_repos}
          followers={datas.followers}
          following={datas.following}
          getRepos={getRepos}
          getFollowers={getFollowers}
          getFollowing={getFollowing}
        />
      }
    }
    return null
  }


  return (
    <div className="App">
      <h1>Github Repos</h1>
      <SearchBox placeholder="Search Repo" handleChange={(e) => setName(e.target.value)} />
      <Button title="Search" onClick={() => getUser()} />
      
      {isLoading && <Loading /> }
      
      <MyComponent />

      <UserFollow data={followers} />
      <UserFollow data={following} />
      <UserFollow data={repos} type="repo" />
      
    </div>
  );
}

export default App;
