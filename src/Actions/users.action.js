// import requester from '../Requester/requester'

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
