import axios from 'axios';
const USER_BASE_URL ='http://localhost:3002/user';
const headers={
    "Content-Type":'application/json',
    Authorization:'Token',
}

class UserService{
    loginUser(credentials){
       return axios.post(USER_BASE_URL+"/login",credentials,headers);
    }
}

export default new UserService();