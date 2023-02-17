import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Sub from './types'
//TS se ejecuta en buildtime, no en runtime
//con typescript tambien se pueden controlar los tipos de los estados
interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace lo k quiere"
  },
  {
    nick: "sergio_serrano",
    subMonths: 8,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  }
]



function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  return (
    <div className="App">
      <h1>Midu Subs</h1>
      <List
        subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
