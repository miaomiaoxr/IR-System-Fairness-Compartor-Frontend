import { useState } from 'react'
import { Backdrop, Button,Typography } from '@mui/material'
import { VerticalBarChart } from './VerticalBarChart';

export const BackDropButton = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => { setOpen(!open) }
    const handleClose = () => { setOpen(false) }

    return (
        <>
            <Button onClick={handleToggle}>Show backdrop</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Typography variant="h6">Backdrop</Typography>
                <VerticalBarChart />
            </Backdrop>
        </>
    )
}
