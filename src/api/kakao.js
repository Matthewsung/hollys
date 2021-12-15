// import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

// let KAKAO_TOKENS = {
//   access_token: '',
//   expires_in: 0,
//   refresh_token: '',
//   refresh_token_expires_in: 0,
//   scope: '',
//   token_type: ''
// }

export const KakaoLogin = () => {
  
  window.Kakao.API.request({
    url: '/v2/user/me',
    success: function(res) {
      localStorage.setItem('id', res.id)
      localStorage.setItem('nickname', res.properties.nickname)
      localStorage.setItem('img', res.properties.profile_image)
      localStorage.setItem('email', res.kakao_account.email)
    },
    fail: function(error) {
      alert(
        'login success, but failed to request user information: ' +
          JSON.stringify(error)
      )
    },
  })
    
}