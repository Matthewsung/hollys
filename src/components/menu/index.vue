<template>
  <div class="menu-container">
    <div class="container">
      <aside class="side-menu-wrap">
        <ul class="side-menu-box">
          <router-link to="/menu/espresso">
            <li class="side-menu">
              COFFEE
            </li>
          </router-link>
          <router-link to="/menu/signature">
            <li class="side-menu">
              라떼·초콜릿·티
            </li>
          </router-link>
          <router-link to="/prepare">
            <li class="side-menu">
              할리치노·빙수
            </li>
          </router-link>
          <router-link to="/prepare">
            <li class="side-menu">
              스파클링
            </li>
          </router-link>
          <router-link to="/prepare">
            <li class="side-menu">
              푸드
            </li>
          </router-link>
          <router-link to="/prepare">
            <li class="side-menu">
              MD상품
            </li>
          </router-link>
          <router-link to="/prepare">
            <li class="side-menu">
              MD식품
            </li>
          </router-link>
        </ul>
        <div class="side-membership-wrap">
          <p class="title">
            Membership
          </p>
          <p>
            할리스 멤버십 'CROWN'으로 
            <br>
            다양한 혜택을 즐겨보세요
          </p>
          <div class="membership-img">
            <img src="@/assets/img/aside-img.gif" alt="멤버십">
          </div>
        </div>
      </aside>
      <MenuComponent />
    </div>
  </div>
</template>

<script>
import MenuComponent from './menu.vue'
export default {
  name: 'menuComponent',
  components: {
    MenuComponent,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/global.scss';
  
  .router-link-active {
    color: $hollys-red;
  }

  .menu-container {

    .container {
      @include container();
      padding: 32px 0;
      display: flex;

      .side-menu-wrap {
        width: 190px;

        .side-menu-box {
          margin-bottom: 32px;
          
          a{
            display: block;

            &:hover {
              color: $hollys-red;
            }
          }

          .side-menu {
            font-size: 23px;
            font-weight: 900;
            padding: 2px 0;
          }
        }

        .side-membership-wrap {
          font-size: 12px;
          color: $hollys-gray;
        
          .title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .membership-img {
            padding: 32px 0;
            border-bottom: 1px solid $hollys-gray;
          }
        }
      }
    }
  }
</style>