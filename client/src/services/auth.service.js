import Axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

class AuthService {
  login(user) {
    return Axios
      .post(`${API_URL}login`, {
        email: user.email,
        password: user.password,
        user_type: user.user_type,
        remember_me: user.remember_me,
      })
      .then((response) => {
        console.log(response);
        if (response.data.result.user) {
          localStorage.setItem('user', JSON.stringify(response.data.result.user));
          localStorage.setItem('token', JSON.stringify(response.data.result.token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return Axios.post(`${API_URL}register`, {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
      repeat_password: user.repeat_password,
      user_type: user.user_type,
    })
    .then((response) => {
      console.log(response);
      if (response.data.result.user) {
        localStorage.setItem('user', JSON.stringify(response.data.result.user));
        localStorage.setItem('token', JSON.stringify(response.data.result.token));
      }
      return response.data;
    });
  }
}

export default new AuthService();
