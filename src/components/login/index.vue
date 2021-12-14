<template>
  <div class="login-container">
    <div class="container">
      <header class="login-header-wrap">
        <h3>멤버십 로그인</h3>
      </header>
      <main class="login-main-wrap">
        <div class="welcome-txt-box">
          <div class="welcome-txt">
            WELCOME
          </div>
          <h5>할리스에 오신것을 환영합니다.</h5>
        </div>
        <div class="login-box">
          <div 
            class="kakao"
            @click="loginKakao"
          >
            <img src="@/assets/img/kakao.png" alt="카카오 로그인">
          </div>
        </div>
      </main>
      <footer class="login-footer-container">
        <p>
          현재 로그인은 카카오 로그인만 가능합니다.
          <br>
          이외의 로그인 기능은 곧 지원할 예정입니다.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import { KakaoLogin } from '@/api/kakao.js';

export default {
  name: 'loginComponent',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    loginKakao() {
      
    const redirect = 'http://localhost:8080/login'

    window.Kakao.Auth.authorize({
      redirectUri: redirect
    });
      KakaoLogin()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';

  .login-container {
    height: calc(100vh - 140px - 145px - (32px * 2));
    min-height: 340px;
    padding: 32px 0;
    display: flex;
    align-items: center;
    
    .container {
      @include container() ;
      text-align: center;

      // .login-header-wrap {}

      .login-main-wrap {

        .welcome-txt-box {
          
          .welcome-txt {
            color: $hollys-red;
            font-size: 60px;
            font-weight: 900;
            margin-bottom: 16px;
          }

        }

        .login-box {
          text-align: center;
          margin: 48px 0;

          .kakao {
            width: 185px;
            height: 45px;
            margin: 0 auto;
            cursor: pointer;
          }
        }
      }

      .login-footer-container {
        
        p {
          font-size: 13px;
          color: #6f6f6f;
        }
      }
    }
  }
</style>