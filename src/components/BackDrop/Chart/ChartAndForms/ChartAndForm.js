import { Stack } from '@mui/material';
import ScatterChart from './Charts/ScatterChart';
import Form from './Form/Form';

const ChartAndForm = ({ model }) => {
    return (
        <Stack>
            <ScatterChart />
            <Form />
        </Stack>
    )
}

export default ChartAndForm