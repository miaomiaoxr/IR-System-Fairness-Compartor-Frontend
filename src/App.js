import { useState, useEffect } from 'react';
import NetWork from './services/Network';
import ModelList from './components/Contents/ModelList';
import FileForm from './components/FileUpLoads/FileForm';
import { BackDropButton } from './components/BackDrop/BackDropButton';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {//initialize the data
    NetWork.getAll().then(res => setData(res.data));
  }, []);

  return (
    <div className="App">
      <h1>AS Comparer</h1>
      <FileForm />
      <BackDropButton />
      <ModelList data={data} />
    </div>
  );
}

export default App;
