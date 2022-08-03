import ChartAndForm from "./ChartAndForm"
import { Stack } from '@mui/material';

const ChartAndFormList = ({data}) => {
    return (
        <Stack direction="row" spacing={2}>
            {data.map(m => m.showModel && <ChartAndForm key={m.id+'CF'} model={m} />)}
        </Stack>
    )
}

export default ChartAndFormList