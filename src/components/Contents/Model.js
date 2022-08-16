import Query from "./Query";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteButton from "../Delete/DeleteButton";
import ModelName from "./ModelName";
import QueryWithSeq from "./QueryWithSeq";

const Model = ({ modelID, modelName, querys, setData, renameModel, modelVer, ...props }) => {

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
            {modelVer === 'task2' && querys.map(query => query.showQuery && <QueryWithSeq key={query.qid} query={query} modelVer={modelVer} {...props} />)}
            {modelVer === 'task1' && querys.map(query => query.showQuery && <Query key={query.qid} query={query} modelVer={modelVer} {...props} />)}
        </Item>
    );
}

export default Model;