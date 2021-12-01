<template>
  <div class="main-container">
    <div class="menu-container">
      <header class="top-menu-wrap">
        <div class="container">
          <ul class="company-wrap">
            <li>
              <img 
                src="@/assets/img/gnb_smenu01.png" 
                alt="창업설명회"
              >
            </li>
            <li
              class="accademy" 
            >
              <img 
                src="@/assets/img/gnb_smenu02_2.gif" 
                alt="아카데미"
              >
            </li>
            <li
              class="accademy" 
            >
              <img 
                src="@/assets/img/gnb_smenu04.gif" 
                alt="기업특판"
              >
            </li>
          </ul>
          <div class="logo-wrap">
            <img src="@/assets/img/logo_210302.gif" alt="할리스로고">
          </div>
          <ul class="top-menu-right">
            <li>
              <img src="@/assets/img/util_login.gif" alt="멤버십 로그인">
              
            </li>
            <li>
              <img src="@/assets/img/util_join.gif" alt="멤버십 가입">
              
            </li>
            <li>
              <img src="@/assets/img/util_09.gif" alt="고객센터">
              
            </li>
            <li class="language">
              <img src="@/assets/img/util_05.gif" alt="English">
              
            </li>
            <li class="language">
              <img src="@/assets/img/util_chinese.gif" alt="中文">
              
            </li>
          </ul>
        </div>
      </header>
      <div 
        class="bot-menu-wrap"
        @mouseenter="showMenu"
      >
        <div class="container">
          <ul class="menu-item-box">
            <li class="menu-item">
              <h6>Menu</h6>
              <p
                :class="{'show': menuShow}"
              >메뉴</p>
            </li>
            <li class="menu-item">
              <h6>HOLLYS Mall</h6>
              <p
                :class="{'show':  menuShow}"
              >할리스 몰</p>
            </li>
            <li class="menu-item">
              <h6>Membership</h6>
              <p
                :class="{'show':  menuShow}"
              >멤버십</p>
            </li>
            <li class="menu-item">
              <h6>HOLLYS News</h6>
              <p
                :class="{'show':  menuShow}"
              >이벤트 및 공지</p>
            </li>
            <li class="menu-item">
              <h6>Store</h6>
              <p
                :class="{'show':  menuShow}"
              >매장</p>
            </li>
            <li class="menu-item">
              <h6>HOLLYS is</h6>
              <p
                :class="{'show':  menuShow}"
              >할리스 소개</p>
            </li>
          </ul>
        </div>
        <div 
          class="sub-menu-box"
          :class="{'show-menu': menuShow}"
          @mouseleave="notShowMenu"
        >
          <div class="container">
            <ul class="sub-menu-item-box">
              <li class="sub-menu-item">
                <p>COFFEE</p>
                <p>라떼 · 초콜릿 · 티</p>
                <p>할리치노 · 빙수</p>
                <p>스파클링</p>
                <p>푸드</p>
                <p>MD상품</p>
                <p>MD식품</p>
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
    </div>
    <main>
      <router-link to="/"></router-link>
    </main>
    <footer class="footer-container">
      <div class="container">
        <div class="footer-top">
          <ul class="content-box">
            <li class="content">개인정보처리방침</li>
            <li class="content">서비스이용약관</li>
            <li class="content">멤버십이용약관</li>
            <li class="content">할리스카드이용약관</li>
            <li class="content">고객문의</li>
            <li class="content">고객설문</li>
            <li class="content">사이트맵</li>
            <li class="content">BI 소개</li>
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
export default {
  name: 'MainComponent',
  data() {
    return{
      menuShow: false,
    }
  },
  methods: {
    showMenu() {
      this.menuShow = true
      // if(e.target.className === 'menu-item') {
      //   this.menuShow = true
      // }
      // else if(e.target.className === '다음 섹션') {
      //   this.menuShow = false
      // }
    },
    notShowMenu() {
      this.menuShow = false
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';  
  .main-container {

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
            }
          }
        }
      }
  
      .bot-menu-wrap {
        margin-top: 8px;
  
        .container {
          @include container();
  
          .menu-item-box {
            display: flex;
            
            // &:hover .menu-item p {
            //   display: block;
            // }
  
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