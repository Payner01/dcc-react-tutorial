import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'



function App() {

const [entries, setEntries] = useState([{weight: 175, date: '2/8/2022'}, {weight: 176, date: '2/9/2020'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
