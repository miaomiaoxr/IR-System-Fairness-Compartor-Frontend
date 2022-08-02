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

    const allSetmodelAndQuerys = (data, bool) => {
        return data.map(m => {
            if (m.id === modelID) {
                m.showModel = bool;
                m.querys = m.querys.map(q => {
                    q.showQuery = bool;
                    return q;
                }
                )
            }
            return m;
        })
    }

    const setOneQuery = (data, qid, bool, modelID) => {
        return data.map(m => {
            if (m.id === modelID) {
                m.querys = m.querys.map(q => {
                    if (q.qid === qid)
                        q.showQuery = bool;
                    return q;
                }
                )
            }
            return m;
        })
    }



    const handleChangeModel = (event) => {
        setChecked(Array.from({ length: modelWithQid.qids.length }, () => event.target.checked));

        setData(data => allSetmodelAndQuerys([...data], event.target.checked));

    };

    const HandleChangeQid = (index, modelID) => {
        return (event) => {
            setChecked(pre => [...pre.slice(0, index), event.target.checked, ...pre.slice(index + 1)]);
            const qid = modelWithQid.qids[index];
            setData(data => setOneQuery(data, qid, event.target.checked, modelID));
        }
    }

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {modelWithQid.qids.map((qid, index) => <QidControl key={qid} qid={qid} checked={checked[index]} handleChangeQid={HandleChangeQid(index, modelID)} />)}
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