import { Stack, Typography } from '@mui/material';
import ScatterChart from './Charts/ScatterChart';
import Form from './Form/Form';
import PyEvals from './Form/PyEvals';

const ChartAndForm = ({ model, qidColors }) => {
    if (!model.showModel) return (<></>);

    const evals = model.evals;
    let ver = 1;
    if (model.ver === 'task2') ver = 2;

    const f1 = evals.f1;

    const showQids = model.querys.filter(q => q.showQuery).map(q => q.qid);
    const noEvals = showQids.filter(qid => !evals.hasOwnProperty(qid));
    console.log('noEvals', noEvals);
    console.log('showQids', showQids);

    const evalsList = [];
    for (let qid in evals) {
        if (showQids.includes(qid))
            evalsList.push({ ...evals[qid], qid });
    }

    const chartDataSet = evalsList.length > 0 ? evalsList.map(q => {
        return {
            label: q.qid,
            data: [{
                x: q.precision !== undefined ? q.precision : q['EE-D'],
                y: q.recall !== undefined ? q.recall : q['EE-R'],
            }],
            backgroundColor: qidColors[Number(q.qid)] || '#000000',
        }
    }) : []


    const formNoEval = noEvals.length > 0 ? noEvals.map(q => q.qid) : []

    return (
        <Stack>
            <Typography variant="h6" noWrap>Model: {model.modelName}</Typography>
            {chartDataSet.length > 0 ? <ScatterChart datasets={chartDataSet} ver={ver} /> : <div>{`No Evaluations in ${model.modelName}`}</div>}
            <Form noEval={formNoEval} f1={f1} ver={ver} />
            <PyEvals pyEval={model.pyEval} showQids={showQids} />
        </Stack>
    )
}

export default ChartAndForm