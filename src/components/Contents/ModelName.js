import { useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TextField } from "@mui/material";

const ModelName = ({ modelName, modelID, renameModel }) => {

    const [name, setName] = useState(modelName);
    const [isNameFocused, setIsNamedFocused] = useState(false);

    return (
        <>
            {!isNameFocused ? (
                <h3 onClick={() => setIsNamedFocused(true)}>
                    Model: {name}
                    <ModeEditIcon fontSize="inherit" color="disabled" />
                </h3>
            ) : (
                <TextField
                    autoFocus
                    label="Model Name"
                    variant="standard"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onBlur={event => { setIsNamedFocused(false); renameModel(modelID, name) }}
                    sx={{ m: 1 }}
                />
            )}
        </>
    )
}

export default ModelName
