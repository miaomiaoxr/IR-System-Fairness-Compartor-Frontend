import { useState } from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import QidControl from './QidControl';

const ModelControl = ({ modelWithQid, showModel, querys, modelID, setData }) => {
    const [checked, setChecked] = useState(Array.from({ length: modelWithQid.qids.length }, (e, i) => {
        if (!showModel) return false;
        else {
            return querys.find(q => q.qid === modelWithQid.qids[i]).showQuery;
        }
    }));

    const handleChangeModel = (event) => {
        setChecked(Array.from({ length: modelWithQid.qids.length }, () => event.target.checked));
    };

    const HandleChangeQid = (index) => {
        return (event) => {
            console.log('index', index, 'event', event.target.checked);
            setChecked(pre => [...pre.slice(0, index), event.target.checked, ...pre.slice(index + 1)]);
        }
    }

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {modelWithQid.qids.map((qid, index) => <QidControl key={qid} qid={qid} checked={checked[index]} handleChangeQid={HandleChangeQid(index)} />)}
        </Box>
    );

    return (
        <Box>
            <FormControlLabel
                label={modelWithQid.modelName}
                control={
                    <Checkbox
                        checked={checked.every(Boolean)}
                        indeterminate={checked.every(Boolean) === false && checked.some(Boolean)}
                        onChange={handleChangeModel}
                    />
                }
            />
            {children}
        </Box>
    );
}

export default ModelControl;