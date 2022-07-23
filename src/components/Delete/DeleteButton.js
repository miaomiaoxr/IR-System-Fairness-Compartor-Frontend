import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import NetWork from '../../services/Network'

const DeleteButton = ({ modelID,setData }) => {

    const handleClick = () => {
        setData(pre => pre.filter(model => model.id !== modelID))//delete in page
        NetWork.remove(modelID);//delete in DB,should await?
        console.log(`Deleting ${modelID}`)
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