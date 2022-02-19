/* eslint-disable import/no-anonymous-default-export */
import http from "./http-common"

const list = () => {
  return http
    .get("data")
    .then((response) => {
      console.log(response)
      return response.data
    })
}


const create = (data) => {
  console.log(data)
  return http
    .post("data", data)
    .then((response) => {
      return response.data
    })
}

const deleteUser = (id) => {
  return http
    .delete(`data/${id}`)
    .then((response) => {
      console.log(response)
      return response
    })
    
}

const show = (id) => {
  return http
    .get(`api/customer/show/${id}`)
    .then((response) => {
      return response.data
    })
}

const update = (id, data) => {
  console.log(data);
  return http
    .post(`api/customer/update/${id}`, data)
    .then((response) => {
      return response.data
    })
}

const removeAll = () => {
  return http
    .delete("api/customer/removeAll")
    .then((response) => {
      console.log(response)
      return response
    })
    
}

const deleteCustomer = (id) => {
  return http
    .delete(`api/customer/delete/${id}`)
    .then((response) => {
      console.log(response)
      return response
    })
    
}

const search = (keyWord) => {
  console.log(keyWord);
  return http
    .post("api/customer/search", {keyWord})
    .then((response) => {
      console.log(response);
      return response.data
    })
}

export default {
  list,
  create,
  deleteUser,
  show,
  update,
  removeAll,
  search
}
