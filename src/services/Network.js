import axios from "axios";

const url = "/api/models"
const evalURL = "/api/eval"

const getAll = () => axios.get(url)

const create = newObject => axios.post(url, newObject)

const postCSVForm = (file) => {
    const formData = new FormData();
    formData.append("model_file", file);
    return axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const postJSONForm = (file) => {
    const formData = new FormData();
    formData.append("eval_file", file);
    return axios.post(evalURL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const postNewModelName = (id, newName) => axios.put(`${url}/${id}`, { newName: newName })

// const update = (newObject) => axios.put(url,newObject)

const remove = id => axios.delete(`${url}/${id}`)

const NetWork = { getAll, create, postCSVForm, postJSONForm, postNewModelName, remove }

export default NetWork