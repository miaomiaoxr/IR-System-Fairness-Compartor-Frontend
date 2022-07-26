import Stack from "@mui/material/Stack";
import Model from "./Model";

const ModelList = ({ data, ...props }) => {

    //...props:exposure, setData, renameModel
    return (
        <>
            <h2>Model List</h2>
            <Stack sx={{ maxHeight: "100%", width: "100%" }} direction="row" spacing={1}>
                {data.map(model =>
                    <Model
                        key={model.id}
                        modelID={model.id}
                        modelName={model.modelName}
                        querys={model.querys}
                        {...props}
                    />)}
            </Stack>
        </>
    )
}

export default ModelList;