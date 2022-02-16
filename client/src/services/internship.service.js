import Axios from 'axios';
import handleReponse from '../helpers/handle-response';
const API_URL = 'http://localhost:4000/api/internships/';
const token = JSON.parse(localStorage.getItem('token'));

class InternshipService {

  getAll() {
    console.log(token)
    return Axios
      .get(`${API_URL}`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }

  getInternshipDetail(url) {
    console.log(token)
    return Axios
      .get(`${API_URL}/${url}`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }
  
  applyToInternship(url) {
    console.log(token)
    return Axios
      .post(`${API_URL}apply/${url}`, {}, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }
}

export default new InternshipService();
