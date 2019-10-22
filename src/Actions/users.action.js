// import requester from '../Requester/requester'
import axios from 'axios';



export const updateUsersState = (store, property, value) => {
  try {
    const users = {
      ...store.state.users,
      [property]: value
    };
    store.setState({ ...store.state, users });
  } catch (error) {
    console.log(error);
  }
};

export const updateDataState = (store, property, value) => {
  try {
    const data = {
      ...store.state.data,
      [property]: value
    }
    store.setState({ ...store.state, data })
  } catch (error) {
    console.log(error)
  }
}


export const updateUsersNestedState = (store, nestedKey, property, value) => {
  try {
    const nestedWithPropertyChanged = {
      ...store.state.data[nestedKey],
      [property]: value
    }
    store.actions.updateUsersState(nestedKey,  nestedWithPropertyChanged)
    // return store.state.transaction
  } catch (error) {
    console.log(error)
  }
}

export const getUsers = async (store) => {
try {
  const { config, services } = store.state
  const axiosConfig = {
    method: services.getUsers.method,
    baseURL: config.api.baseURL,
    url: services.getUsers.endpoint,
    headers: {
      API_KEY: config.api.key,
      "Access-Control-Allow-Origin": "*"
    },
  }
   return await axios.request(axiosConfig)
    .then(response => [null, response])
    .catch(error => [error])
} catch (error) {
  console.log(error)
}
}
