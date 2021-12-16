<template>
  <div class="main-page-container">
    <header class="menu-container">
      <div class="top-menu-wrap">
        <div class="container">
          <ul class="company-wrap">
            <li>
              <router-link to="/hollys/prepare">
                <img 
                  src="@/assets/img/gnb_smenu01.png" 
                  alt="창업설명회"
                >
              </router-link>
            </li>
            <li class="accademy">
              <router-link to="/hollys/prepare">
                <img 
                  src="@/assets/img/gnb_smenu02_2.gif" 
                  alt="아카데미"
                >
              </router-link>
            </li>
            <li class="accademy">
              <router-link to="/hollys/prepare">
                <img 
                  src="@/assets/img/gnb_smenu04.gif" 
                  alt="기업특판"
                >
              </router-link>
            </li>
          </ul>
          <div class="logo-wrap">
            <router-link to="/hollys/">
              <img src="@/assets/img/logo_210302.gif" alt="할리스로고">
            </router-link>
          </div>
          <ul class="top-menu-right">
            <li
              v-if="!isUser"
            >
              <router-link to="/hollys/login">
                <img src="@/assets/img/util_login.gif" alt="멤버십 로그인">
              </router-link>
            </li>
            <li
              v-if="!isUser"
            >
              <router-link to="/hollys/prepare">
                <img src="@/assets/img/util_join.gif" alt="멤버십 가입">
              </router-link>
            </li>
            <li
              v-else-if="isUser"
            >
              <div 
                class="user-box"
                @mouseenter="showMore"
              >
                <div class="user-img-box">
                  <img :src="user.img" alt="">
                </div>
                <div class="user-name">
                  {{user.nickname}}
                </div>
                <div 
                  class="more-box"
                  @mouseleave="hiddenMore"
                  v-if="showMoreBox"
                >
                  <p>
                    <router-link to="/hollys/prepare">
                      계정관리
                    </router-link>
                  </p>
                  <p
                    @click="logOut"
                  >
                    로그아웃
                  </p>
                </div>

              </div>
            </li>
            <li>
              <router-link to="/hollys/prepare">
                <img src="@/assets/img/util_09.gif" alt="고객센터">
              </router-link>
            </li>
            <li class="language">
              <router-link to="/hollys/prepare">
                <img src="@/assets/img/util_05.gif" alt="English">
              </router-link>
            </li>
            <li class="language">
              <router-link to="/hollys/prepare">
                <img src="@/assets/img/util_chinese.gif" alt="中文">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="bot-menu-wrap">
        <div class="container">
          <ul 
            class="menu-item-box"
            @mouseenter="showMenu"
          >
            <li class="menu-item">
              <router-link to="/hollys/menu/espresso">
                <h6>Menu</h6>
                <p
                  :class="{'show': menuShow}"
                >메뉴</p>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/hollys/prepare">
                <h6>HOLLYS Mall</h6>
                <p
                  :class="{'show':  menuShow}"
                >할리스 몰</p>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/hollys/prepare">
                <h6>Membership</h6>
                <p
                  :class="{'show':  menuShow}"
                >멤버십</p>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/hollys/prepare">
                <h6>HOLLYS News</h6>
                <p
                  :class="{'show':  menuShow}"
                >이벤트 및 공지</p>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/hollys/prepare">
                <h6>Store</h6>
                <p
                  :class="{'show':  menuShow}"
                >매장</p>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/hollys/prepare">
                <h6>HOLLYS is</h6>
                <p
                  :class="{'show':  menuShow}"
                >할리스 소개</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div 
          class="sub-menu-box"
          :class="{'show-menu': menuShow}"
          @mouseleave="menuHide"
        >
          <div class="container">
            <ul class="sub-menu-item-box">
              <li class="sub-menu-item">
                <router-link to="/hollys/menu/espresso">
                  <p>
                    COFFEE
                  </p>
                </router-link>
                <router-link to="/hollys/menu/signature">
                  <p>
                    라떼·초콜릿·티
                  </p>
                </router-link>
                <router-link to="/hollys/prepare">
                  <p>
                    할리치노·빙수
                  </p>
                </router-link>
                <router-link to="/hollys/prepare">
                  <p>
                    스파클링
                  </p>
                </router-link>
                <router-link to="/hollys/prepare">
                  <p>
                    푸드
                  </p>
                </router-link>
                <router-link to="/hollys/prepare">
                  <p>
                    MD상품
                  </p>
                </router-link>
                <router-link to="/hollys/prepare">
                  <p>
                    MD식품
                  </p>
                </router-link>
              </li>
              <li class="sub-menu-item">
                <p>할리스콘</p>
                <p>할리스카드</p>
                <p>구매내역</p>
              </li>
              <li class="sub-menu-item">
                <p>스마트오더</p>
                <p>멤버십 혜택</p>
              </li>
              <li class="sub-menu-item">
                <p>Notice</p>
                <p>Event</p>
              </li>
              <li class="sub-menu-item">
                <p>매장검색</p>
              </li>
              <li class="sub-menu-item">
                <p>HOLLYS</p>
                <p>할리스 위치 및 연락처</p>
                <p>채용 안내</p>
                <p>가맹문의 및 절차</p>
                <p>B2B 사업 소개</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main class="main-container">
      <router-view></router-view>
    </main>
    <footer class="footer-container">
      <div class="container">
        <div class="footer-top">
          <ul class="content-box">
            <li class="content">
              <router-link to="/hollys/prepare">
                개인정보처리방침
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                서비스이용약관
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                멤버십이용약관
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                할리스카드이용약관
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                고객문의
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                고객설문
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                사이트맵
              </router-link>
            </li>
            <li class="content">
              <router-link to="/hollys/prepare">
                BI 소개
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-bot">
          <div class="company-detail">
              법인명: (주) 케이지할리스에프앤비 대표자: 이종현 사업자등록번호 211-87-61044 통신판매업: 제2019-서울종로-0193호
          </div>
          <div class="company-detail">
              주소 : 서울특별시 종로구 율곡로 88 삼환빌딩 8층 (운니동) 02-2188-7100 (가맹문의 : 02-6350-7229)
          </div>
          <div class="company-detail">
              COPYRIGHT (C) KG HOLLYS F&B. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  KakaoLogout,
  } from '../api/kakao.js'

export default {
  name: 'MainComponent',
  components: {
   

  },
  data() {
    return{
      isUser: false,
      menuShow: false,
      user: {},
      showMoreBox: false,
    }
  },
  mounted() {
    this.chkUser()
  },
  methods: {
    showMenu() {
      if(this.menuShow === true) {
        this.menuShow = true
      }
      else {
        this.menuShow = true
      }
    },
    menuHide() {
      this.menuShow = false
    },
    movePage(path) {
      this.$router.push(
        {
          path: `/hollys/menu/${path}`,
        }
      )
    },
    chkUser() {
      if(localStorage.getItem('id')) {
        this.isUser = true
        this.user = {
          img: localStorage.getItem('img'),
          nickname: localStorage.getItem('nickname'),
          email: localStorage.getItem('email')
        }
        console.log(111)
      }
      else{
        this.isUser = false
      }
    },
    logOut() {
      KakaoLogout()
    },
    showMore() {
      this.showMoreBox = true
    },
    hiddenMore() {
      this.showMoreBox = false
    }
  },
  watch: {

  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';  

  .main-page-container {

    .menu-container { 
  
      .top-menu-wrap {
  
        .container {
          @include container();
          display: flex;
          justify-content: space-between;
  
          .company-wrap {
            display: flex;
  
            li {
              width: 99px;
              height: 76px;
              cursor: pointer;
  
              &.accademy {
                width: 69px;
                
                img {
                  margin-top: 20px;
                }
              }
            }
            
          }
  
          .logo-wrap {
            width:66px;
            height: 55px;
            margin-top: 21px;
            cursor: pointer;
          }
  
          .top-menu-right {
            height: 21px;
            margin-top: 12px;
            display: flex;
            align-items: center;
  
            li {
              margin-left: 16px;
              cursor: pointer;
  
              &:first-child {
                margin-left: 0;
              }
  
              &.language {
                margin-top: 2px;
              }
  
              img {
                width: 100%;
              }

              .user-box {
                display: flex;
                align-items: center;
                gap: 8px;
                position: relative;

                .user-img-box {
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  overflow: hidden;
                }

                .user-name {
                  font-size: 13px;
                  margin-top: 2px;
                }
                
                .more-box {
                  box-shadow: 0 0 3px 0 rgba(0,0,0, 0.4);
                  text-align: center;
                  position: absolute;
                  left: 0;
                  top: calc(100% + 8px);
                  z-index: 9;

                  p {
                    width: 100px;
                    padding: 4px 0;
                    background: #fff;
                    
                    &:hover {
                      background: $hollys-red;
                      color: #fff;
                    }
                  }
                }
              }
            }
          }
        }
      }
  
      .bot-menu-wrap {
        margin-top: 8px;
        border-bottom: 2px solid $hollys-red;
        position: relative;
  
        .container {
          @include container();
  
          .menu-item-box {
            display: flex;
            position: relative;
  
            .menu-item {
              width: calc(100% / 6);
              height: 56px;
              text-align: center;
              cursor: pointer;       
  
              &:hover {
                color: #fff;
                background: $hollys-red;
              }

              h6 {
                margin-top: 8px;
              }
  
              p {
                font-size: 12px;
                display: none;
  
                &.show {
                  display: block;
                }
              }
            }
          }
        }
  
        .sub-menu-box {
          height: 0;
          color:#808080;
          background:$hollys-gray;
          overflow: hidden;
          transition: all 0.4s;
          position: absolute;
          left: 0;
          right: 0;
          top: 56px;
          z-index: 9;

          &.show-menu {
            height: 270px;
            padding: 16px 0;
          }
  
          .sub-menu-item-box {
            display: flex;
  
  
            .sub-menu-item {
              width: calc(100% / 6);
              font-size: 14px;
              text-align: center;
              cursor: pointer;      
              
              p {
                padding: 8px 0;
  
                &:hover {
                  color: #fff;
                }
              }
            }
  
          }
        }     
      }
    }
  
    .main-container {
      
      .container {
        @include container();
      }
    }

    .footer-container {
      width: 100%;
      height: 145px;
      font-size: 14px;
      color: #fff;
      background: $hollys-red;
  
      .container {
        @include container();
  
        .footer-top {
          padding: 32px 0 16px;
          
          .content-box {
            display: flex;
  
            .content {
              font-weight: 600;
              padding: 0 8px;
              position: relative;
              cursor: pointer;
  
              &:first-child {
                padding-left: 0;
              }
  
              &::after {
                content:'';
                width:1px;
                height: 10px;
                background: #fff;
                position: absolute;
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
              }
  
              &:last-child::after {
                display: none;
              }
            }
          }
        }
  
        .footer-bot {
          font-size: 12px;
          color: #de898e;
        }
      }
    }
  }
</style>