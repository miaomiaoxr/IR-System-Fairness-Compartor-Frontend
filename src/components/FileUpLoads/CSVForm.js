import FileForm from './FileForm'
import Network from '../../services/Network';

const CSVForm = ({ setData }) => {

    const postForm = Network.postCSVForm;
    const afterUploadHandler = (data) => {
        data.showModel = true;
        data.querys.map(query => query.showQuery = true);
        setData(pre => [...pre, data]);
    }

    return (
        <FileForm postForm={postForm} afterUpload={afterUploadHandler} accept=".csv" mime='text/csv' textContent='Upload CSV' />
    )
}

export default CSVForm