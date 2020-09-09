import React, {useState} from 'react';
import './App.scss';
import { SearchBox, Button, UserCard } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [datas, setDatas] = useState('')
  console.log(name)

  
  const getUser = () => {
    setIsLoading(true);
    
    setTimeout( () => {
      fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
      console.log("ini data", data)

        setDatas(data);
      })
    },1000)
  }



  console.log("ini datas", datas)

  return (
    <div className="App">
      <SearchBox placeholder="Search Repo" handleChange={(e) => setName(e.target.value)} />
      <Button title="Search" onClick={() => getUser()} />
      
      <UserCard 
        avatar={datas.avatar_url} 
        name={datas.name}
        email={datas.email}
        repos={datas.public_repos}
        followers={datas.followers}
        following={datas.following}
      />
    </div>
  );
}

export default App;
