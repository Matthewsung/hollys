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
            :src="mainImg" 
            :alt="menuItem.nameKo">
        </div>
        <div class="item-desc">
          <div class="item-share">
            <p class="share-site facebook">페이스북</p>
            <p class="share-site twitter">트위터</p>
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
    </main>
  </div>
</template>

<script>
import { 
  menuType,
  beverage,
} from '@/api/menu.js'

const coffeeImg = [
  require('@/assets/img/menu/vanila_oat_latte.png'),
  require('@/assets/img/menu/americano_de.png'),
  require('@/assets/img/menu/Caffe_Latte_De.png'),
  require('@/assets/img/menu/Vanilla_Delight_De.png'),
  require('@/assets/img/menu/Premium_Blend_Americano.png'),
  require('@/assets/img/menu/Cold_Brew_Delight.png'),
  require('@/assets/img/menu/Double_Vanilla_Delight.png'),
  require('@/assets/img/menu/Premium Blend Deep Latte.png'),
  require('@/assets/img/menu/Vanilla_Delight.png'),
  require('@/assets/img/menu/Ristretto_Delight.png'),
  require('@/assets/img/menu/Cold_Brew_Latte.png'),
  require('@/assets/img/menu/Cold_Brew.png'),
  require('@/assets/img/menu/Caramel_Macchiato.png'),
  require('@/assets/img/menu/Caffe_Mocha.png'),
  require('@/assets/img/menu/Cappuccino.png'),
  require('@/assets/img/menu/Caffe_Latte.png'),
  require('@/assets/img/menu/Caffe-Americano.png'),
  require('@/assets/img/menu/Affogato.png'),
  require('@/assets/img/menu/Espresso.png'),
]
export default {
  name: 'espressoComponent',
  data() {
    return {
      menuType: {},
      menuItem: {},
      mainImg: null,
      subImg: null,
    }
  },
  mounted() {
    this.menuType = menuType[0]
    this.menuItem = beverage[0]
    this.mainImg = coffeeImg[0]
    this.subImg = coffeeImg.splice(0, 1)
    console.log(this.subImg)
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';

  .espresso-container {
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
              text-indent: -99999px;

              &.facebook {
                background: url("../../assets/img/sns_facebook.gif") no-repeat center / cover;
              }

              &.twitter {
                background: url("../../assets/img/sns_twitter.gif") no-repeat center / cover;
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
            &:last-child {
              font-weight: 600;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }
</style>