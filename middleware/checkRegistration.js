export default function ({store, redirect, route}) {
  // if(process.server){
  //   return redirect('/registration')
  //   }else {
  //   if (route.fullPath === "/cabinet") {
  //     store.dispatch('checkRegistration').then(response => {
  //       const status = response.data.data.status
  //       if (status === 1) {
  //         return redirect('/registration')
  //       }
  //     })
  //   }
  // }


    store.app.router.beforeEach((to, from, next) => {
      if(to !== '/cabinet'){
        store.dispatch('checkRegistration').then(response => {
          const status = response.data.data.status
          if (status === 1) {
            return redirect('/registration')
          }
        })
        next()
      }


    })


}
