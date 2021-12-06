<template>
  <div class="main-slide-wrap">
    <Slick
      id="banner-slick-slide"
      :options="slideOptions"
      v-if="slideOptions"
    >
      <p 
        class="banner-slide"
        v-for="(banner, index) in bannerImg"
        :key="banner + '_' + index"
        :style="{'backgroundImage': `url(${banner})`}"
      >
      </p>
    </Slick>
  </div>
</template>

<script>
  import Slick from 'vue-slick';

  const bannerImg = [
    require('@/assets/img/mainBanner_1.jpg'),
    require('@/assets/img/mainBanner_2.jpg'),
    require('@/assets/img/mainBanner_3.jpg'),
  ]

  export default {
    name: 'MainSlideComponent',
    components: {
        Slick,

    },
    data() {
      return{
        bannerImg,
        slideOptions: {
          infinite: true,
          arrows:false,
          slidesToShow: 1,
          autoplay: true,
          dots: true,
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  
  .main-slide-wrap {

    .banner-slide {
      width: 100%;
      height: 400px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  
  }
</style>

<style lang="scss">
  #banner-slick-slide {
    display: flex;		
		align-items: center;
    position: relative;

    .slick-list {
			width: 100%;
			overflow: hidden;

			.slick-track {
				width: 100%; 
				display: flex;		
			}
		}

    .slick-dots {
			text-indent: -999999px;
      display: flex;
      gap: 8px;
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translateX(-50%);
      
      li {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #e1e1e0;
        cursor: pointer;

        &.slick-active {
          background: #ba000c;
        }
      }
		}
  }
</style>