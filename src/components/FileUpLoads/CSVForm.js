// const CSVForm = ({ setData }) => {

//     const postForm = Network.postCSVForm;


//     return (
//         <FileForm postForm={postForm} afterUpload={afterUploadHandler} accept=".csv" mime='text/csv' textContent='Upload CSV' />
//     )
// }


const afterUploadHandler = (data,setData) => {
    data.showModel = true;
    data.querys.map(query => query.showQuery = true);
    setData(pre => [...pre, data]);
}

export default afterUploadHandler