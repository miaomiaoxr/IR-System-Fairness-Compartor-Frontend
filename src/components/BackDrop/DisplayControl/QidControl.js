import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const QidControl = ({qid,checked,handleChangeQid}) => {
    return (
        <FormControlLabel
            label={qid}
            control={<Checkbox checked={checked} onChange={handleChangeQid} />}
        />
    )
}

export default QidControl