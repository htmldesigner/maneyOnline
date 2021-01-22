import r from './routes'

export default {
  dataPost(route, data) {
    let headers = {}
    // headers['Content-Type'] = 'multipart/form-data';
    // const token = localStorage.getItem('token')
    // if (token) {
    //   headers['Authorization'] = `Bearer ${token}`
    // }
    return {
      method: 'POST',
      url: r(route),
      data: data,
      // headers: headers,
      // transformRequest: [(data) => {
      //   let fData = new FormData();
      //   for (let key in data) {
      //     fData.set(key, data[key])
      //   }
      //   return fData;
      // }],
    };
  },

  dataGet(route) {
    return {
      method: 'get',
      url: r(route),
    };
  },

  checkRegistration(axios) {
    return axios(this.dataGet('/user/checkregistration'));
  },

  getUserForm(axios) {
    return axios(this.dataGet('/user/anketa'));
  },

  sendUserData(axios, payload) {
    return axios(this.dataPost('/user/sendsms', payload));
  },

  confirmUserDate(axios, payload){
    return axios(this.dataPost('/user/checksms', payload))
  }

}
