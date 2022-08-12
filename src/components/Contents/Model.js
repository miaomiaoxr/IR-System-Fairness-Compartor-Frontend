import Query from "./Query";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteButton from "../Delete/DeleteButton";
import ModelName from "./ModelName";

const Model = ({ modelID, modelName, querys, setData, renameModel, modelVer, ...props }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    let newQuerys = [];
    if (modelVer === 'task2') {
        newQuerys = querys.map(q => {
            q = {...q}
            console.log('q.data', q.data)
            const newData = q.data.reduce((pre, cur) => {
                if (!pre[cur.seq_id])
                    pre[cur.seq_id] = [];
                pre[cur.seq_id].push(cur);
                return pre;
            }, {})

            q.newData = [];
            for (let k in newData)
                q.newData.push(newData[k]);
            return q;
        })
    }
    console.log('querys.newData', newQuerys.newData)

    return (
        <Item>
            <ModelName modelName={modelName} modelID={modelID} renameModel={renameModel} />
            <DeleteButton modelID={modelID} setData={setData} />
            {modelVer === 'task2' && newQuerys.map(query => query.showQuery && query.newData.map(seq => <Query key={query.qid + seq.seq_id} query={{ ...query, data: seq, qid: query.qid + seq.seq_id }} {...props} />))}
            {modelVer === 'task1' && querys.map(query => query.showQuery && <Query key={query.qid} query={query} modelVer={modelVer} {...props} />)}
        </Item>
    );
}

export default Model;