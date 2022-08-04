import { Stack, Typography } from '@mui/material';
import ScatterChart from './Charts/ScatterChart';
import Form from './Form/Form';

const ChartAndForm = ({ model, qidColors }) => {
    const evals = model.evals;
    const noEvals = model.querys.filter(q => !evals.hasOwnProperty(q.qid));
    const evalsList = [];
    for (let qid in evals) {
        evalsList.push({ ...evals[qid], qid });
    }

    const chartDataSet = evalsList.length > 0 ? evalsList.map(q => {
        return {
            label: q.qid,
            data: [{
                x: q.precision,
                y: q.recall,
            }],
            backgroundColor: qidColors[Number(q.qid)] || '#000000',
        }
    }) : []


    const formNoEval = noEvals.length > 0 ? noEvals.map(q => q.qid) : []

    return (
        <Stack>
            <Typography variant="h6" noWrap>Model: {model.modelName}</Typography>
            {chartDataSet.length > 0 ? <ScatterChart datasets={chartDataSet} /> : <div>{`No Evaluations in ${model.modelName}`}</div>}
            <Form noEval={formNoEval} evalsList={evalsList} />
        </Stack>
    )
}

export default ChartAndForm