import React from 'react'
import FileForm from './FileForm'

const CSVForm = ({ setData }) => {
    const afterUploadHandler = (data) => {
        setData(pre => [...pre, data]);
    }

    return (
        <FileForm afterUpload={afterUploadHandler} accept=".csv" mime='text/csv' textContent='Upload CSV'/>
    )
}

export default CSVForm