import React,{useState} from 'react'
import './style.css'
import Gallery from './components/Gallery'
import SearchBox from './components/SearchBox'

const App = () => {

  const [input, setInput] = useState("");
    return (
        <center>
            <h1>Photo Search Application</h1>
            <SearchBox input={input} setInput={setInput}/>
            <Gallery query={input}/>
        </center>
    )
}

export default App;
