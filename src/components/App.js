
import '../App.css';
import CommentCard from './CommentCard';
import { useState, useEffect } from "react";
function App() {

  const [data, setData] = useState([])
 

  useEffect(() => {
      fetch("http://localhost:3000/comments")
       .then((response) => response.json())
       .then(res => {
          console.log(res)
          setData(res)
       })
  },[])
  



  return (
    <div className="App">
        <CommentCard data={data} />
    </div>
  );
}

export default App;
