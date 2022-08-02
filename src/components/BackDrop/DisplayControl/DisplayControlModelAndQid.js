import ModelControl from "./ModelControl"
import { Stack } from "@mui/material"



const DisplayControlModelAndQid = ({ data, modelsWithQid, setData }) => {
  return (
    <Stack
      sx={{
        maxHeight: "100%", width: "100%", display: "flex"
      }}
      direction="row"
      spacing={2}>
      {modelsWithQid.map(modelWithQid => <ModelControl key={modelWithQid.id} modelID={modelWithQid.id} showModel={data.find(m => m.id === modelWithQid.id).showModel} querys={data.find(m => m.id === modelWithQid.id).querys} modelWithQid={modelWithQid} setData={setData} />)}
    </Stack>
  )
}



export default DisplayControlModelAndQid