import { useState, useEffect } from 'react';
import NetWork from './services/Network';
import ModelList from './components/Contents/ModelList';
import ASAppBar from './components/AppBar/ASAppBar';

function App() {
  const [data, setData] = useState([]);
  const [exposure, setExposure] = useState("none");

  useEffect(() => {//initialize the data
    NetWork.getAll().then(res => setData(res.data));
  }, []);

  const renameModel = (modelID, newName) => {
    NetWork.putNewModelName(modelID, newName)
      .then(() => setData(pre => pre.map(model => model.id === modelID ? { ...model, modelName: newName } : model)));
  }

  return (
    <div className="App">
      <ASAppBar setData={setData} exposure={exposure} setExposure={setExposure} />
      <ModelList data={data} exposure={exposure} setData={setData} renameModel={renameModel}/>
    </div>
  );
}

export default App;
