import axios from 'axios';

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`)
    .then((res) => ({
      bio: res.data,
    }))
}
export {getUserInfo};

// json数据的获取，?v=${Math.random()} 防止浏览器缓存
function getJsonData(){
  return axios.get(`https://raw.githubusercontent.com/newming/haoduoshipin/master/src/blogs/index.json?v=${Math.random()}`)
    .then((res) => ({
      posts: res.data,
    }))
}
export {getJsonData};

// 获取 markdown 文件
function getMarkdown(address){
  return axios.get(`https://raw.githubusercontent.com/newming/haoduoshipin/master/src/blogs/${address}.md`)
    .then((res) => ({
      rawContent: res.data,
    }))
}
export {getMarkdown};
