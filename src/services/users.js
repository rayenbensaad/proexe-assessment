/* eslint-disable import/no-anonymous-default-export */
import http from "./http-common"

const list = () => {
  return http
    .get("data")
    .then((response) => {
      return response.data
    })
}


export default {
  list,
}
