export default ({app, store, redirect}, inject) => {
  // Every time the route changes (fired on initialization too)
  inject('injectedRouting', () => {
    store.dispatch('users/checkRegistration').then(response => {
      const status = response.data.data.status
      if (status === 1) {
        return redirect('/registration')
      }
    })
  })
}
