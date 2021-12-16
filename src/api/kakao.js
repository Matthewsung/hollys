export const KakaoLogin = () => {
  
  window.Kakao.API.request({
    url: '/v2/user/me',
    success: function(res) {
      localStorage.setItem('id', res.id)
      localStorage.setItem('nickname', res.properties.nickname)
      localStorage.setItem('img', res.properties.profile_image)
      localStorage.setItem('email', res.kakao_account.email)
      window.location.href = 'http://localhost:8080'
    },
    fail: function(error) {
      alert(
        'login success, but failed to request user information: ' +
          JSON.stringify(error)
      )
    },
  })   
}

export const KakaoLogout = () => {
  window.Kakao.Auth.logout(function() {
    localStorage.clear()
    window.location.href = 'http://localhost:8080'
  })

}