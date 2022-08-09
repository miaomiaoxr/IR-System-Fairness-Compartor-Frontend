const afterUploadHandler = (data,setData) => {
    data.showModel = true;
    data.querys.map(query => query.showQuery = true);
    setData(pre => [...pre, data]);
}

export default afterUploadHandler