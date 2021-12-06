<template>
  <div class="main-container">
    <div class="main-info-wrap">
      <div class="franchise-wrap">
        <div class="info-title">
          <img src="@/assets/img/menu_tit.gif" alt="가맹문의">
        </div>
        <div class="info-content">
          <img src="@/assets/img/menu_img01.gif" alt="가맹문의하기">
        </div>
      </div>
      <div class="mall-wrap">
        <div class="info-title">
          <img src="@/assets/img/mall_tit.gif" alt="할리스 몰">
          <p>할리스의 다양한 상품들을 온라인에서도 만나보세요</p>
        </div>
        <div class="info-content">
          <div class="item">
            <img src="@/assets/img/mushroom_soupe.png" alt="트러플머쉬룸스프볼">
            <p>트러플머쉬룸스프볼</p>
          </div>
          <div class="item">
            <img src="@/assets/img/potato_denish.png" alt="베이컨 포테이토 데니쉬">
            <p>베이컨 포테이토 데니쉬</p>
          </div>
          <div class="item">
            <img src="@/assets/img/con_denish.png" alt="콘 치즈 데니쉬">
            <p>콘 치즈 데니쉬</p>
          </div>
        </div>
      </div>
      <div class="store-wrap">
        <div class="info-title">
          <img src="@/assets/img/store_tit.gif" alt="전국매장">
        </div>
        <div class="info-content">
          <img src="@/assets/img/store_main_pc.jpg" alt="전국매장 찾기">
        </div>
      </div>
    </div>
    <div class="main-member-wrap">
      <div class="benefit-wrap membership">
        <img src="@/assets/img/membership.jpg" alt="할리스멤버십">
      </div>
      <div class="benefit-wrap card">
        <img src="@/assets/img/card.jpg" alt="할리스카드">
      </div>
    </div>
    <div class="main-board-wrap">
      <div class="board-content">
        <div class="content-title">
          <img src="@/assets/img/academy_tit.gif" alt="커피아카데미">
        </div>
        <div class="content-desc">
          <div class="desc-text">
            할리스 아카데미와 함께하는 즐거운 커피여행!
          </div>
          <p class="desc-more">
            <img src="@/assets/img/ico_arrow.gif" alt="바로가기">
            바로가기
          </p> 
        </div>
      </div>
      <div class="board-content">
        <div class="content-title">
          <img src="@/assets/img/b2b_tit.gif" alt="솔루션소개">
        </div>
        <div class="content-desc">
          <div class="desc-text">
            할리스 F&B는 20년의 커피 노하우를 기반으로 한 할리스 B2B 솔루션을 소개합니다.
          </div>
          <p class="desc-more">
            <img src="@/assets/img/ico_arrow.gif" alt="바로가기">
            바로가기
          </p> 
        </div>
      </div>
      <div class="board-content">
        <div class="content-title">
          <img src="@/assets/img/news_tit.gif" alt="뉴스">
          <span>
            <img src="@/assets/img/ico_arrow.gif" alt="바로가기">
          </span>
        </div>
        <div class="content-desc">
          <ul class="desc-item-box">
            <li 
              class="desc-item"
              v-for="(list, index) in newsTxt" :key="list.title + '_' + index"
            >
              <div class="desc-title">
                {{list.title}}
              </div>
              <span class="desc-date">
                {{list.date | dataFormat}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="board-content content-item-box">
        <div class="content-item">
          <div class="item-img">
            <img src="@/assets/img/img_etc01.gif" alt="창업안내">
          </div>
          <p class="item-text">창업안내</p>
        </div>
        <div class="content-item">
          <div class="item-img">
            <img src="@/assets/img/img_etc02.gif" alt="아카데미 강좌">
          </div>
          <p class="item-text">아카데미 강좌</p>
        </div>
        <div class="content-item">
          <div class="item-img">
            <img src="@/assets/img/img_etc03.gif" alt="고객문의">
          </div>
          <p class="item-text">고객문의</p>
        </div>
      </div>
    </div>
    <div class="main-sns-wrap">
      <h4>HOLLYS Live</h4>
      <ul class="sns-box">
        <li class="sns-item">
          <img src="@/assets/img/sns_facebook.gif" alt="페이스북">
        </li>
        <li class="sns-item">
          <img src="@/assets/img/sns_instagram.gif" alt="인스타그램">
        </li>
        <li class="sns-item">
          <img src="@/assets/img/sns_blog.gif" alt="블로그">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainInforComponent',
  data() {
    return {
      newsTxt: [
        {
          title: 'SKT 제휴서비스 종료 안내',
          date: '2021-02-22'
        },
        
        {
          title: '개인정보처리방침 변경 안내',
          date: '2021-07-01'
        },
        {
          title: '중간배당 기준일 공고',
          date: '2020-10-14'
        },
      ]
    }
  },
  filters: {
    dataFormat: value => {
      return value.substr(5, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';
  //가맹문의, 할리스몰, 스토어 묶음
  @mixin info-layout() {
    .info-title {
      margin-left: 18px;

      p {
        font-size: 12px;
        font-weight: 900;
        margin-top: 12px;
      }
    }
    .info-content {
      margin-top: 28px;
      display: flex;
      cursor: pointer;

      img {
        width: 100%;
      }

      .item {
        width: calc(100% / 3);
        padding: 12px;
        position: relative;
        
        &:hover {
          color: $hollys-red;
        }

        &::after {
          content: '';
          width: 1px;
          height: 55%;
          background: #ddd;
          display: block;
          position: absolute;
          left: 100%;
          top: 60%;
          transform: translateY(-50%);
        }

        &:last-child::after {
          display: none;
        }

        p {
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
  //게시판 레이아웃
  @mixin board-layout() {
    font-size: 13px;

    .content-title {

      span {
        margin-left: 8px;
        cursor: pointer;
      }
    }

    .content-desc {
      padding: 4px 0 ;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .desc-text {
        height: 48px;
      }

      .desc-more {
        text-align: right;
        margin-top: 8px;
      }

      .desc-item-box {

        .desc-item {
          display: flex;
          justify-content: space-between;
          cursor: pointer;

          &:hover {
            font-weight: 600;            
          }

          .desc-title {}

          .desc-date {
            text-align: right;
          }
        }
      }
    }

    &.content-item-box {
      text-align: center;
      margin-top: 25px;
      display: flex;
      gap: 4px;

      .content-item {
        width: calc(100% / 3);
        cursor: pointer;

        &:last-child .item-img::after {
          display: none;
        }

        .item-img {
          height: 44px;
          position: relative;

          &::after {
            content: '';
            width: 1px;
            height: 100%;
            background: #ddd;
            display: block;
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .item-text {
          margin-top: 16px;
          font-size: 11px;
        }
      }
    }
  }
  .main-container {
    @include container() ;
    
    .main-info-wrap {
      padding: 48px 0;
      display: flex;
      gap: 8px;
  
      .franchise-wrap { 
        width: 225px;
        @include info-layout();
      }
  
      .mall-wrap { 
        width: 460px;
        @include info-layout();
      }
  
      .store-wrap { 
        width: 225px;
        @include info-layout();
      }
    }

    .main-member-wrap {
      display: flex;
      gap: 8px;

      .benefit-wrap {
        width: calc((100% - 8px) / 2);

        img {
          width: 100%;
        }
      }
    }

    .main-board-wrap {
      padding: 48px 0;
      display: flex;
      gap: 18px;

      .board-content {
        width: calc(100% / 4);
        @include board-layout();
      }
    }

    .main-sns-wrap {
      padding: 48px 0;
      border-top: 2px solid $hollys-red;
      color: #000;
      display: flex;
      gap: 16px;

      .sns-box {
        display: flex;
        gap: 8px;

        .sns-item {
          cursor: pointer;
        }
      }
    }
  }
</style>