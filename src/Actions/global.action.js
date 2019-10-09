export const setLoadingSpinner = (store, status = null) => {
  store.setState({
    ...store.state,
    loadingSpinner: (status !== null) ? status : !store.state.loadingSpinner
  })
}

export const setLoading = (store, status = null) => {
  store.setState({
    ...store.state,
    loading: (status !== null) ? status : !store.state.loading
  })
}