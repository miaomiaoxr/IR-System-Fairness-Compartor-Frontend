import FileForm from './FileForm'
import Network from '../../services/Network';

const CSVForm = ({ setData }) => {

    const postForm = Network.postCSVForm;
    const afterUploadHandler = (data) => {
        setData(pre => [...pre, data]);
    }

    return (
        <FileForm postForm={postForm} afterUpload={afterUploadHandler} accept=".csv" mime='text/csv' textContent='Upload CSV' />
    )
}

export default CSVForm