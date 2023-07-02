import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import {useEffect, useState} from 'react';
const App = ()=> {
const [tasks,setTasks] = useState(null);
const getData= async ()=>
  { const userEmail="example1@example.com";
   
    try{
      const response = await fetch(`http://localhost:3001/todos/${userEmail}`)
      const json=await response.json()
      setTasks(json);
    }
    catch(err){
      console.log(err);
      
    }
  }
  useEffect(()=>getData,[])
  console.log(tasks)
  const sortedTasks = tasks?.sort((a,b) => a.date- b.date) //saved tasks sorted by date into an array


  return (
    <div className="App">
    <ListHeader  listName={'Holiday Tick List'}/>
    {
      sortedTasks?.map((task) => {return <ListItem key={task.id} task={task}/>})
    }
   
  </div>
  );
}

export default App;
