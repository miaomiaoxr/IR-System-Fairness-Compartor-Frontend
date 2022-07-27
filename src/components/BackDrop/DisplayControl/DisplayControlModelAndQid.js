import ModelControl from "./ModelControl"
import { Stack } from "@mui/material"



const DisplayControlModelAndQid = ({modelsWithQid}) => {
  return(
    <Stack direction="row" spacing={2}>
    {modelsWithQid.map(modelWithQid => <ModelControl key={modelWithQid.id} modelWithQid={modelWithQid} />)}
    </Stack>
  )
}



export default DisplayControlModelAndQid