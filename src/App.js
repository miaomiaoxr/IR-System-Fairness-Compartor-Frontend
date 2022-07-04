import { useState, useEffect } from 'react';
import NetWork from './services/Network';
import ModelList from './components/ModelList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {//initialize the data
    NetWork.getAll().then(res => setData(res.data));
  },[]);

  return (
    <div className="App">
      <h1>AS Comparer</h1>
      <ModelList data={data} />
    </div>
  );
}

export default App;
