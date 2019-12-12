import axios from 'axios'

export const updateMainApiState = (store, property, value) => {
  try {
    store.setState({ ...store.state, [property]: value })
  } catch (error) {
    console.log(error)
  }
}
export const updateApiState = (store, property, value) => {
  try {
    const medicalData = { [property]: value }
    store.setState({ ...store.state.api, medicalData })
    console.log(store.state)
  } catch (error) {
    console.log(error)
  }
}

export const addMedicalData = async (store, medicalData) => {
  try {
    const { config, services } = store.state
    const axiosConfig = {
      method: services.addMedicalData.method,
      baseURL: config.api.baseURL,
      url: services.addMedicalData.endpoint.replace('{{CPF}}', medicalData.document),
      headers: {
        API_KEY: config.api.key,
        'Access-Control-Allow-Origin': '*'
      },
      data: medicalData
    }

    console.log('AXIOS CONFIG', axiosConfig)

    return axios.request(axiosConfig)
      .then(response => [null, response])
      .catch(error => [error])
  } catch (error) {
    console.log(error)
  }
}
