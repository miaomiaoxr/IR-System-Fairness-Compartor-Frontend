import Query from "./Query";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteButton from "../Delete/DeleteButton";
import ModelName from "./ModelName";

const Model = ({ modelID, modelName, querys, setData, renameModel, ...props }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Item>
            <ModelName modelName={modelName} modelID={modelID} renameModel={renameModel} />
            <DeleteButton modelID={modelID} setData={setData} />
            {querys.map(query => query.showQuery && <Query key={query.qid} query={query} {...props} />)}
        </Item>
    );
}

export default Model;