<template>
  <div class="espresso-container">
    <header class="content-header">
      <div class="menu-history">
        {{menuType.menuHistory}}
      </div>
      <h2>
        {{menuType.menuTitle}}
      </h2>
    </header>
    <main class="content-main">
      <div class="item-box">
        <div class="item-img">
          <img 
            :src="menuItem.img" 
            :alt="menuItem.nameKo">
        </div>
        <div class="item-desc">
          <div class="item-share">
            <p 
              class="share-site facebook"
              @click="shareMenu('facebook')"
            >
              페이스북
            </p>
            <p 
              class="share-site twitter"
              @click="shareMenu('twitter')"
            >
              트위터
            </p>
            <p 
              class="share-site kakao"
              @click="shareMenu('kakao')"
            >
              카카오톡
            </p>
            <p 
              class="share-site naver"
              @click="shareMenu('naver')"
            >
              네이버
            </p>
            <p class="badge">시즌음료</p>
          </div>
          <div class="item-info">
            <h3>
              {{menuItem.nameKo}}
            </h3>
            <div class="item-name">
              {{menuItem.nameEn}}
            </div>
            <div class="item-explanation">
              {{menuItem.desc}}
            </div>
          </div>
        </div>
      </div>
      <div class="item-ingredients">
        <h6 class="ingredients-title">
          {{menuItem.nutritionInfo}}
        </h6>
        <table>
          <tr
            v-for="(list, index) in menuItem.nutrition"
            :key="list + '_' + index"
          >
            <td>
              {{list.contents}}
            </td>
            <td>
              {{list.cal}}
            </td>
            <td>
              {{list.sugar}}
            </td>
            <td>
              {{list.protein}}
            </td>
            <td>
              {{list.fat}}
            </td>
            <td>
              {{list.natrium}}
            </td>
            <td>
              {{list.caffeine}}
            </td>
          </tr>
        </table>
        <div 
          class="item-allergy"
          v-if="menuItem.allergy"
        >
          <p>
            {{menuItem.allergy[0]}}
          </p>
          <p>
            {{menuItem.allergy[1]}}
          </p>
          
        </div>
      </div>
      <BarChart 
        :chartId="`espresso_${menuIndex}`"
        :chartData="menuItem.nutrition"
      />
      <div class="other-menus">
        <ul 
          class="other-menus-box"
          :class="{'other-menu-box-active':  moreBtn === 'CLOSE'}"
        >
          <li 
            class="other-menu" 
            v-for="(item, index) in allItems" 
            :key="item.nameKo + '_' + index"
          >  
            <div 
              class="other-menu-img-box"
              @click="changeMenu(index)"
            >
              <img 
                :src="item.img" 
                :alt="item.nameKo"
              >
            </div>
            <p class="other-menu-name">
              {{ item.nameKo }}
            </p>
          </li>
        </ul>

        <div 
          class="hidden-menu-box"
          @click="showMoreMenus"
        >
          <div class="hidden-menu"></div>
          <div class="hidden-btn">
            <p>{{ moreBtn }}</p>
            <p 
              class="arrow-btn"
              :class="{'arrow-rotate': moreBtn === 'CLOSE' }"
            >
              <img src="@/assets/img/arrow-white.svg" alt="더보기">
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { 
  menuType,
  beverage,
} from '@/api/menu.js'
import {
  facebook,
  twitter,
  kakao,
  naver,
} from '@/api/shareSNS.js'
import BarChart from '../common/barChart.vue'

const coffeeImg = {
  espresso: [
    require('@/assets/img/menu/espresso/vanila_oat_latte.png'),  
    require('@/assets/img/menu/espresso/americano_de.png'),
    require('@/assets/img/menu/espresso/Caffe_Latte_De.png'),
    require('@/assets/img/menu/espresso/Vanilla_Delight_De.png'),
    require('@/assets/img/menu/espresso/Premium_Blend_Americano.png'),
    require('@/assets/img/menu/espresso/Cold_Brew_Delight.png'),
    require('@/assets/img/menu/espresso/Double_Vanilla_Delight.png'),
    require('@/assets/img/menu/espresso/Premium Blend Deep Latte.png'),
    require('@/assets/img/menu/espresso/Vanilla_Delight.png'),
    require('@/assets/img/menu/espresso/Ristretto_Delight.png'),
    require('@/assets/img/menu/espresso/Cold_Brew_Latte.png'),
    require('@/assets/img/menu/espresso/Cold_Brew.png'),
    require('@/assets/img/menu/espresso/Caramel_Macchiato.png'),
    require('@/assets/img/menu/espresso/Caffe_Mocha.png'),
    require('@/assets/img/menu/espresso/Cappuccino.png'),
    require('@/assets/img/menu/espresso/Caffe_Latte.png'),
    require('@/assets/img/menu/espresso/Caffe-Americano.png'),
    require('@/assets/img/menu/espresso/Affogato.png'),
    require('@/assets/img/menu/espresso/Espresso.png'),
  ],
  signature: [
    require('@/assets/img/menu/signature/1.png'),  
    require('@/assets/img/menu/signature/2.png'),
    require('@/assets/img/menu/signature/3.png'),
    require('@/assets/img/menu/signature/4.png'),
    require('@/assets/img/menu/signature/5.png'),
    require('@/assets/img/menu/signature/6.png'),
    require('@/assets/img/menu/signature/7.png'),
    require('@/assets/img/menu/signature/8.png'),
    require('@/assets/img/menu/signature/9.png'),
    require('@/assets/img/menu/signature/10.png'),
    require('@/assets/img/menu/signature/11.png'),
    require('@/assets/img/menu/signature/12.png'),
    require('@/assets/img/menu/signature/13.png'),
    require('@/assets/img/menu/signature/14.png'),
    require('@/assets/img/menu/signature/15.png'),
    require('@/assets/img/menu/signature/16.png'),
    require('@/assets/img/menu/signature/17.png'),
  ],
}
export default {
  name: 'espressoComponent',
  components: {
    BarChart,
  },
  data() {
    return {
      menuType: {},
      allItems: [],
      menuItem: {},
      moreBtn: 'MORE',
      beverage: null,
      menuIndex: 0,
    }
  },
  beforeMount() {
    // 메뉴 타입을 저장 완료
    this.chkBeverage()
    // 타입에 따라 메뉴 설정
    this.initialItems()
  },
  computed: {
    shareLink() {
      return `http://localhost:8080${this.$route.path}?type=${this.$route.query.type}`
    }
  },
  methods: {
    chkBeverage() {
      this.beverage = this.$route.params.beverage
      this.menuType = menuType[this.beverage]
      //query가 없을때 0 으로 고정
      if(this.$route.query.type === undefined){
        this.$route.query.type = 0
      }
      // 메뉴 타입에 따라 모든 음료 메뉴 설정
      this.allItems = [...beverage[this.beverage]]
    },
    showMoreMenus() {
      if(this.moreBtn === 'MORE') {
        this.moreBtn = 'CLOSE'
      }
      else {
        this.moreBtn = 'MORE'
      }
    },
    changeMenu(index) {
      const beverage = this.$route.params.beverage;
      this.$router.push(
        {
          path: `/hollys/menu/${beverage}?type=${index}`
        }
      )
    },
    initialItems() {
      if(this.$route.query === ''){
        this.$router.push(
          {
            path: `/hollys/menu/${beverage}?type=0`
          }
        ) 
      }
      else{
        this.menuIndex = this.$route.query.type
      }

      this.allItems.map( (item, index) => {
        item.img = coffeeImg[this.beverage][index]
      })
      this.menuItem = beverage[this.beverage][this.menuIndex]
    },
    shareMenu(type) {
      if( type === 'facebook') {
        facebook({
          url: this.shareLink,
        })
      }
      else if( type === 'twitter') {
        twitter({
          url: this.shareLink,
          title: this.menuItem.nameKo
        })
      }
      else if( type === 'kakao') {
        kakao({
          url: this.shareLink,
          title: this.menuItem.nameKo,
          img: this.menuItem.img,
          nameKo: this.menuItem.nameKo
        })
      }
      else if( type === 'naver') {
        naver({
          url: this.shareLink,
          title: this.menuItem.nameKo
        })
      }
    }
  },
  watch: {
    $route(to, from) {
      if(to.query.type !== from.query.type) {
        this.chkBeverage()
        this.initialItems()
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';

  .espresso-container {
    width: calc(100% - 190px - (32px * 2));
    padding: 0 32px;

    .content-header {

      .menu-history {
        color: $hollys-gray;
        font-size: 13px;
        margin-bottom: 16px;
      }
    }

    .content-main {

      .item-box {
        display: flex;

        .item-img {
          width: 400px;

          img {
            width: 100%;
          }
        }

        .item-desc {
          width: calc(100% - 400px);
          margin-top: 64px;

          .item-share {
            display: flex;
            gap: 8px;

            .share-site {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              text-indent: -99999px;

              &.facebook {
                background: url("../../assets/img/sns_facebook.gif") no-repeat center / cover;
              }

              &.twitter {
                background: url("../../assets/img/sns_twitter.gif") no-repeat center / cover;
              }
              
              &.kakao {
                background: url("../../assets/img/sns_kakao.png") no-repeat center / cover;
              }

              &.naver {
                background: url("../../assets/img/sns_naver.png") no-repeat center / cover;
              }
            }

            .badge {
                width: 125px;
                height: 24px;
                text-indent: -99999px;
                background: url("../../assets/img/menu/icon_seasolan_menu.gif") no-repeat center / contain;
            }
          }

          .item-info {
            margin: 16px 0 ;

            .item-name {
              font-size: 13px;
              color: $hollys-gray;
              margin: 8px 0 24px;
            }

            .item-explaination {
              font-size: 13px;
              color: $hollys-gray;
            }
          }
        }
      }

      .item-ingredients {
        margin: 16px 0 ;

        .ingredients-title {
          padding: 8px 0;
        }

        table {
          width: 100%;
          color: $hollys-gray;
          border-collapse: collapse;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          margin: 16px 0 ;

          tr {

            &:first-child {
              font-weight: 600;
            }
          }

          td {
            border: 1px solid #ddd;
            padding: 8px 0;
            text-align: center;

            &:first-child {
              border-left: none;
              font-weight: 600;
            }

            &:last-child {
              border-right: none;
            }
          }
        }

        .item-allergy {

          p {
            color: $hollys-gray;

            &:last-child {
              font-weight: 600;
              margin-top: 4px;
            }
          }
        }
      }

      .other-menus {
        margin-bottom: 32px;

        .other-menus-box {
          height: 130px;
          color: $hollys-gray;
          margin: 32px 0;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;

          &.other-menu-box-active {
            height: auto;
          }
  
          .other-menu { 
            width: calc(100% / 6);
            cursor: pointer;
  
            &:hover .other-menu-name {
              text-decoration: underline;
            }
  
            .other-menu-img-box {}
  
            .other-menu-name {
              font-size: 11px;
              text-align: center;
            }
          }
        }

        .hidden-menu-box {
          position: relative;

          .hidden-menu {
            width: 100%;
            height: 1px;
            background: #d9d9d9;
          }

          .hidden-btn {
            width: 80px;
            height: 80px;
            font-size: 14px;
            text-align: center;
            border-radius: 50%;
            color: #fff;
            background: $hollys-red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;

            p {

              &:first-child {
                margin-top: 17px;
              }

              &.arrow-btn {
                width: 25px;
                height: 25px;
                transition: all 0.4s;

                &.arrow-rotate {
                  transform: rotateZ(180deg);
                }
              }
            }

          }
        }
      }
    }
  }
</style>