import axios from 'axios';
import handleReponse from '../helpers/handle-response';
const API_URL = 'http://localhost:4000/api/auth';
const token = JSON.parse(localStorage.getItem('token'));
import { getAPIResponseError } from '../helpers/common';

class AuthService {

  currentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async login(payload) {
    try {
      const { data } = await axios.post(`${API_URL}/login`, payload);
      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', JSON.stringify(data.data.token));
      return data;
    } catch (error) {
      return getAPIResponseError(error) || 'Unable to login please try again';
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
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
      if (response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.setItem('token', JSON.stringify(response.data.data.token));
      }
      return response.data;
    });
  }
  
  getLoggedInUserDetail() {
    return Axios
      .get(`${API_URL}myprofile`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }
}

export default new AuthService();
