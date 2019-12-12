import usersState from './users.state'
import dataState from './data.state'
import servicesState from './services.state'
import apiState from './api.state'

const initialState = {
  config:{
    api: {
      baseURL: 'https://viniciusnovo.dev:19387/',
      key: '1e8bbcf1-894e-4147-9a76-0be5c566cde1'
    }
  },
  api: apiState,
  users: usersState,
  data: dataState,
  services: servicesState
}

export default initialState
