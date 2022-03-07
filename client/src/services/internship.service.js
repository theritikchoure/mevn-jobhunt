import Axios from 'axios';
import handleReponse from '../helpers/handle-response';
const API_URL = 'http://localhost:4000/api/internships/';
const token = JSON.parse(localStorage.getItem('token'));

class InternshipService {

  /**
 * @desc POST - Create Internship by Employer
 * @param {*} - Data Obj
 */
  createInternship(data) {
    console.log(token)
    return Axios
      .post(`${API_URL}`, data, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      });
  }

 /**
 * @desc GET - All Countries
 * @param --
 */
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

 /**
 * @desc GET - Internship Details by url
 * @param {*} - Data Obj
 */
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

 /**
 * @desc POST - Apply to an internship
 * @param --
 */
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

 /**
 * @desc POST - Like/Unlike to an internship
 * @param --
 */  
  likeUnlikeToInternship(url) {
    console.log(token)
    return Axios
      .post(`${API_URL}like/${url}`, {}, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }

 /**
 * @desc GET - Applied internships of student
 * @param --
 */
  getAppliedInternships() {
    console.log(token)
    return Axios
      .get(`${API_URL}/student/applied-jobs`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(handleReponse)
      .then(response => {
        console.log(response);
        return response;
      })
  }
}

export default new InternshipService();
