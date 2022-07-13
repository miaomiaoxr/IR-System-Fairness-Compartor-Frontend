import { useState } from 'react'
import { Modal, Button, Card } from '@mui/material'
import { VerticalBarChart } from './VerticalBarChart';

export const BackDropButton = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => { setOpen(!open) }
    const handleClose = () => { setOpen(false) }

    const modalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const cardStyle = {
        m: 'auto',
        width: '80%'
    };

    return (
        <>
            <Button onClick={handleToggle}>Show backdrop</Button>
            <Modal
                sx={modalStyle}
                open={open}
                onClose={handleClose}
            >
                <Card sx={cardStyle}>
                    <VerticalBarChart />
                </Card>
            </Modal>
        </>
    )
}
