import Axios from "axios";

const API_URL = "http://localhost:4000/api/contactus/";

class ContactService {
  create(object) {
    return Axios.post(`${API_URL}`, {
      name: object.name,
      email: object.email,
      subject: object.subject,
      message: object.message,
    }).then((response) => {
      console.log(response.data.data);
      return response.data;
    });
  }
}

export default new ContactService();
