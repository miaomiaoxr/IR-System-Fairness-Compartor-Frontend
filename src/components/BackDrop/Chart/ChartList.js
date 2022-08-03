import { Stack, Typography } from '@mui/material';
import ScatterChart from './ScatterChart';

import React from 'react'

const ChartList = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack>
                <ScatterChart />
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="h6">Statistics</Typography>
            </Stack>
            <Stack>
                <ScatterChart />
                <Typography variant="h6">Statistics</Typography>
            </Stack>
            <Stack>
                <ScatterChart />
                <Typography variant="h6">Statistics</Typography>
            </Stack>
            <Stack>
                <ScatterChart />
                <Typography variant="h6">Statistics</Typography>
            </Stack>
        </Stack>
    )
}

export default ChartList