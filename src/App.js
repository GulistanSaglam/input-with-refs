import { useState, useRef } from 'react'
import './App.css'

function App() {

  const personName = useRef();
  const [enteredName, setEnteredName] = useState(null);

  const handleName = () => {
    setEnteredName(personName.current.value);
    personName.current.value = ''
  }

  return (
    <div className='app'>
      <h1>Welcome <span> {enteredName ?? 'Unknown Name'} </span></h1>
      <div className='form'>
        <input ref={personName} type='text' />
        <button onClick={handleName}>Submit</button>
      </div>
    </div>
  );
}

export default App;
