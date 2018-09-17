<template>
  <div id="app">
    <mypage></mypage>
  </div>
</template>

<script>
import opening from '@/components/opening'
import mypage from '@/components/mypage'

export default {
  name: 'App',
  components: {
    'opening': opening,
    'mypage': mypage
  }
}
</script>

<style>
</style>
