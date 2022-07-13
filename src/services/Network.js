import axios from "axios";

const url = "/api/models"
const evalURL = "/api/eval"

const getAll = () => axios.get(url)

const create = newObject => axios.post(url,newObject)

const postCSVForm = (file) => {
    const formData = new FormData();
    formData.append("model_file", file);
    return axios.post(url, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const postJSONForm = (file) => {
    const formData = new FormData();
    formData.append("eval_file", file);
    return axios.post(evalURL, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// const update = (newObject) => axios.put(url,newObject)

// const remove = id => axios.delete(`${url}/${id}`)

const NetWork = {getAll,create, postCSVForm,postJSONForm}

export default NetWork