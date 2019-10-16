import usersState from './users.state'
import dataState from './data.state'

const initialState = {
  environment: {
    dev: 'https://.com/'
  },
  users: usersState,
  data: dataState
}

export default initialState