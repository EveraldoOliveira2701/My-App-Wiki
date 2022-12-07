import { useState} from 'react'
import gitImg from "./components/github-mark-white.svg";
import Input from "./components/Input";
import Button from "./components/Butn/indexBt";
import ItemRepo from "./components/ItemRepo/indexRepo";
import { Container } from "./pages/styles";
import { api } from './services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const handleSearchRepo = async () => {
  const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
    alert('Repósitório já consta na lista')
  }
  const handleRemoveRepo = (id) =>{
    const  copyRepos = [...repos] 
      const newRepos = copyRepos.filter(repo => repo.id != id) 
      setRepos(newRepos);
  }
  return (
    <Container>
      <img src= {gitImg } width={80} height={80} alt="github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  )
}

export default App;
