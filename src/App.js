import React, {useEffect, useState} from "react";
 import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"
function App() {
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket =io('ws://localhost:8080')
    //  io(`http://${window.location.hostname}:3000`);
    socket.on('message',text=>{
      let temp=[...message]
      temp.push(text)
      setMessage(temp)
      console.log(`message from server`, text);
    })
    setSocket(socket);
    return () => socket.close();
  }, [setSocket]);
  // const socket = new WebSocket('ws://localhost:8080')
    // const socket = io('ws://localhost:8080')

const handleUser =(e)=>{
  setUser(e.target.value)
  localStorage.setItem("user", e.target.value)
}
  return (
    <div className="App">
     <input type="text" value={user} onChange={handleUser}/>
    </div>
  );
}

export default App;
