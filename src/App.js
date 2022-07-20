import { useState, useEffect } from 'react';
import NetWork from './services/Network';
import ModelList from './components/Contents/ModelList';
import ASAppBar from './components/AppBar/ASAppBar';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {//initialize the data
    NetWork.getAll().then(res => setData(res.data));
  }, []);

  return (
    <div className="App">
      <ASAppBar setData={setData}/>
      <ModelList data={data} />
    </div>
  );
}

export default App;
