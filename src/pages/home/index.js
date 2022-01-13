import React, {useEffect, useState} from "react";
 import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"
function App() {
  const [message, setMessage] = useState([]);
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


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<button onClick={()=>socket.emit('message', 'hello')}>Send</button>
<button onClick={()=>socket.emit('reset', 'delete')}>reset</button>
<ul>
{message.map(data=>{
  return <li>{data}</li>
})}
</ul>
      </header>
    </div>
  );
}

export default App;
