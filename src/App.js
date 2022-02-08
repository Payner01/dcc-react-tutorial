import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


function App() {

const [entries, setEntries] = useState([{weight: 175, date: '2/8/2022'}, {weight: 176, date: '2/9/2020'}])

function addNewEntry(entry){

  let tempEntries = [...entries, entry];

  setEntries(tempEntries);

}

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;
