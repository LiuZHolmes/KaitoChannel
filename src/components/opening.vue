<template>
  <div>
    <transition name="fade">
      <img v-if="show" src="@/assets/test_bg.png">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'opening',
  data: function () {
    return {
      show: true
    }
  },
  mounted: function () {
    this.show = false
  }
}
</script>

<style scoped>
#opening{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  z-index:1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
