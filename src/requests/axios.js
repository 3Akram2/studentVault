import axios from "axios";
const API = axios.create({ baseURL : 'https://fluffy-space-capybara-p6754pwgw9r29x6-3001.app.github.dev/student',withCredentials:true});
export const storeStudentData = async(student) => await API.post('/',student); 