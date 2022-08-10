import NetWork from '../../services/Network'
import JSONAfterUpload from './JSONForm';
import CSVAfterUpload from './CSVForm';
import FileForm from './FileForm';
import { memo } from 'react';

const UnifyUpload = ({ setData }) => {
    const { postCSVForm, postJSONForm } = NetWork;

    const UnifyPostForm = (file) => {
        if (file.type === 'text/csv') return postCSVForm(file);
        if (file.type === 'application/json') return postJSONForm(file);
        // throw new Error('File type is not supported');//TODO: Error handling
    }

    const UnifyAfterUpload = ( data, fileType ) => {// we allow no AfterUpload
        if (fileType === 'text/csv') return CSVAfterUpload(data, setData);
        if (fileType === 'application/json') return JSONAfterUpload(data, setData);
    }

    return (
        <FileForm postForm={UnifyPostForm} afterUpload={UnifyAfterUpload} accept=".csv,.json" mime='text/csv,application/json' textContent='Upload' />
    )
}

export default memo(UnifyUpload)

