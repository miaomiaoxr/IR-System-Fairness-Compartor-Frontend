import axios from "axios";

const url = "/api/models"

const getAll = () => axios.get(url)

const create = newObject => axios.post(url,newObject)

const update = (newObject) => axios.put(url,newObject)

const remove = id => axios.delete(`${url}/${id}`)

const NetWork = {getAll,create,update,remove}

export default NetWork