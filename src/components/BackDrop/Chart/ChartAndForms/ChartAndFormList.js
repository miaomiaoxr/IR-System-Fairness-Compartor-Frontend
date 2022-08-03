import ChartAndForm from "./ChartAndForm"
import { Stack } from '@mui/material';

const ChartAndFormList = () => {
    return (
        <Stack direction="row" spacing={2}>
            <ChartAndForm />
            <ChartAndForm />
        </Stack>
    )
}

export default ChartAndFormList