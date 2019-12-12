const servicesState = {
  createUser: {
    method: 'post',
    endpoint: 'ubdent/v0/anamnese'
  },
  getUsers: {
    method: 'get',
    endpoint: 'ubdent/v0/anamnese'
  },
  getOneUser: {
    method: 'get',
    endpoint: 'ubdent/v0/anamnese/{{CPF}}'
  },
  addMedicalData: {
    method: 'patch',
    endpoint: 'ubdent/v0/anamnese/{{CPF}}'
  }
}

export default servicesState
