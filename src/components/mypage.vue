<template>
    <div>
     <transition
                  name="custom-classes-transition"
                  enter-active-class="animated tada"
      >
        <img v-if="show" src="@/assets/logo.png">
      </transition>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'mypage',
  data: function () {
    return {
      show: false
    }
  },
  mounted: function () {
    this.show = true
  }
}
</script>

<style scoped>
img{
    max-width:100px;
    max-height:100px;
    position:fixed;
    top: 10px;
    left: 10px;
    z-index: -1;
}
</style>
