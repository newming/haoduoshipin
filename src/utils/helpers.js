import axios from 'axios';

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`)
    .then((res) => ({
      bio: res.data,
    }))
}
export {getUserInfo};
