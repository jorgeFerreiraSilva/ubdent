import React from 'react'
import useGlobalHook from './UseGlobalHook'
import * as actions from '../Actions'
import initialState from '../States/initial.state'

export const useGlobal = useGlobalHook(React, initialState, actions)

export default useGlobal
