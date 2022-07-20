import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton = ({ modelName }) => {
    const handleClick = () => {
        console.log(`Deleting ${modelName}`)
    }

    return (
        <div>
            <Button
                component="label"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClick}
            >
                Delete
            </Button>
        </div>
    )
}

export default DeleteButton