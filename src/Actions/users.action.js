// import requester from '../Requester/requester'
import axios from 'axios'

export const updateUsersState = (store, property, value) => {
  try {
    const users = {
      ...store.state.users,
      [property]: value
    }
    store.setState({ ...store.state, users })
  } catch (error) {
    console.log(error)
  }
}

// export const getUsers = (store) => {
// try {
//   const { user, config, services } = store.state
//   const axiosConfig = {
//     method: services.getUsers.method,
//     baseURL: config.api.baseURL,
//     url: services.getUsers.endpoint,
//     headers: {
//       API_KEY: config.api.key
//     },
//     // data: {
//     //   name: user.name,
//     //   cpf: user.document
//     // }
//   }

//   return axios.request(axiosConfig)
//     .then(response => [null, response])
//     .catch(error => [error])
// } catch (error) {
//   console.log(error)
// }
// }