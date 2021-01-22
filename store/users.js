import api from "../api/api";

export const state = () => (
  {
    user: null,
  }
)
export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  /**
   * Предварительная отправка данных пользователя если не существует то регистрируется
   * @param commit
   * @param payload
   * @return {Promise<void>}
   */
  async sendUserData({commit}, payload) {
    try {
      await api.sendUserData(this.$axios, payload)
    } catch (error) {
      console.log(error.response.data.error)
      throw error
    }
  },
  /**
   * Отпрвка SMS подтверждения вместе с данными пользователи
   * @param commit
   * @param payload
   * @return {Promise<*>}
   */
  async confirmUserDate({commit}, payload) {
    try {
      return await api.confirmUserDate(this.$axios, payload)
    } catch (error) {
      console.log(error.response.data.error)
      throw error
    }
  },
  /**
   * Получить анкуту пользователя с дынными если есть
   * @param commit
   * @return {Promise<void>}
   */
  async getUserForm({commit}) {
    try {
     const response =  await api.getUserForm(this.$axios)
      commit('SET_USER', response.data.data)
    } catch (error) {
      console.log(error.response.data.error)
      throw error
    }
  },

}

export const getters = {
  getUser: state => state.user,
}
