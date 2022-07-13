import { useState, useEffect } from 'react';
import NetWork from './services/Network';
import ModelList from './components/Contents/ModelList';
import CSVForm from './components/FileUpLoads/CSVForm';
import { BackDropButton } from './components/BackDrop/BackDropButton';
import JSONForm from './components/FileUpLoads/JSONForm';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {//initialize the data
    NetWork.getAll().then(res => setData(res.data));
  }, []);

  return (
    <div className="App">
      <h1>AS Comparer</h1>
      <CSVForm setData={setData}/>
      <JSONForm />
      <BackDropButton />
      <ModelList data={data} />
    </div>
  );
}

export default App;
