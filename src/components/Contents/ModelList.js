import Model from "./Model";
import Stack from "@mui/material/Stack";


const ModelList = ({ data }) => {
    return (
        <div>
            <h2>Model List</h2>
            <Stack sx={{ maxHeight: "100%", width: "100%" }} direction="row" spacing={1}>
                {data.map(model => <Model key={model.model} model={model.model} querys={model.querys} />)}
            </Stack>
        </div>
    )
}

export default ModelList;