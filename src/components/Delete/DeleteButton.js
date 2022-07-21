import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import NetWork from '../../services/Network'

const DeleteButton = ({ modelName,setData }) => {

    const handleClick = () => {
        setData(pre => pre.filter(model => model.model !== modelName))//delete in page
        NetWork.remove(modelName);//delete in DB,should await?
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