import { Stack, Typography } from '@mui/material';
import ScatterChart from './Charts/ScatterChart';
import Form from './Form/Form';

const ChartAndForm = ({ model, qidColors }) => {
    const evals = model.querys.filter(q => q.eval !== undefined)
    const noEvals = model.querys.filter(q => q.eval === undefined)

    const chartDataSet = evals.length > 0 ? evals.map(q => {
        return {
            data: {
                x: q.eval.precision,
                y: q.eval.recall,
                label: q.qid,
            },
            backgroundColor: qidColors[q.qid],
        }
    }) : []

    const formNoEval = noEvals.length > 0 ? noEvals.map(q => q.qid) : []

    return (
        <Stack>
            <Typography variant="h6" noWrap>Model: {model.modelName}</Typography>
            {evals.length > 0 ? <ScatterChart dataSets={chartDataSet} /> : <div>{`No Evaluations in ${model.modelName}`}</div>}
            <Form noEval={formNoEval} />
        </Stack>
    )
}

export default ChartAndForm