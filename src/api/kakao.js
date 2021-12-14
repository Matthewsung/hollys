import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const KAKAO_API = {
  key: process.env.VUE_APP_REST_KEY,
  redirect: 'http://localhost:8080/login'
};

export const KakaoLogin = () => {
  const path = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_API.key}&redirect_uri=${KAKAO_API.redirect}`
  console.log(path, axios)
  // axios({
    //   method: 'GET',
    //   url: path,
    // }).then(res => console.log(res))
    
    // localStorage.setItem('code', window.location.href)
  // // window.open(path)  
  // // localStorage.setItem('code', code)
}