import { useState } from 'react'
import { Modal, Button, Card } from '@mui/material'
import IconControl from './IconControl';

export const BackDropControl = (props) => {
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
        width: '80%',
        maxHeight: '80%',
        overflow: "scroll",
        overflowY: "scroll",
    };

    return (
        <>
            <Button color="inherit" onClick={handleToggle} startIcon={IconControl(props.name)}>{props.name}</Button>
            <Modal
                sx={modalStyle}
                open={open}
                onClose={handleClose}
            >
                <Card sx={cardStyle}>
                    {props.children}
                </Card>
            </Modal>
        </>
    )
}
