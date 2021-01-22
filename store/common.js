export const state = () => (
  {
    loading: false,
    error: null,
    success: null
  }
)
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setSuccess(state, payload) {
    state.success = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  },
  clearSuccess(state) {
    state.success = null
  },
}
export const actions = {
  setLoading({commit}, payload) {
    commit('setLoading', payload)
  },
  setSuccess({commit}, payload) {
    commit('setSuccess', payload)
  },
  clearSuccess({commit}) {
    commit('clearSuccess')
  },
  setError({commit}, payload) {
    commit('setError', payload)
  },
  clearError({commit}) {
    commit('clearError')
  }
}

export const getters = {
  loading(state) {
    return state.loading
  },
  success(state) {
    return state.success
  },
  error(state) {
    return state.error
  }
}
