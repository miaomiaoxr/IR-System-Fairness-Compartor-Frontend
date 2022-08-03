import ChartAndForm from "./ChartAndForm"
import { Stack } from '@mui/material';

const ChartAndFormList = ({ data, qidColors }) => {
    return (
        <Stack direction="row" spacing={2}>
            {data.map(m => m.showModel && <ChartAndForm key={m.id + 'CF'} model={m} qidColors={qidColors} />)}
        </Stack>
    )
}

export default ChartAndFormList