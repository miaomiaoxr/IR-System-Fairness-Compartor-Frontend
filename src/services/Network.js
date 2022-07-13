import axios from "axios";

const url = "/api/models"

const getAll = () => axios.get(url)

const create = newObject => axios.post(url,newObject)

const postForm = (file) => {
    const formData = new FormData();
    formData.append("model_file", file);
    return axios.post(url, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// const update = (newObject) => axios.put(url,newObject)

// const remove = id => axios.delete(`${url}/${id}`)

const NetWork = {getAll,create,postForm}

export default NetWork