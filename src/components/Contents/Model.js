import Query from "./Query";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteButton from "../Delete/DeleteButton";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { TextField } from "@mui/material";
import { useState } from 'react';
import NetWork from "../../services/Network";

const Model = ({ modelID, modelName, querys, setData, ...props }) => {
    const { postNewModelName } = NetWork;

    const [name, setName] = useState(modelName);
    const [isNameFocused, setIsNamedFocused] = useState(false);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    return (
        <Item>
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
                    onBlur={event => {setIsNamedFocused(false) ; postNewModelName(modelID, name)}}
                    sx={{m:1}}
                />
            )}

            <DeleteButton modelID={modelID} setData={setData} />
            {querys.map(query => <Query key={query.qid} query={query} {...props} />)}

        </Item>
    );
}

export default Model;