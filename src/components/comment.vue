<template>
    <li>
        <img src='@/assets/comment.png' alt=''>
        <p>{{title}}</p>
    </li>
</template>

<script>
/* eslint-disable */
export default {
  name: 'comment',
  data () {
    return {
    }
  },
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: 'Heiti';
    src: url('../assets/Heiti.ttf');
}
li {
    position:relative;
    font-family: Heiti;
    font-size: 20px;
    color: #000000;
    text-shadow:#FFFFFF 1px 0 0,#FFFFFF 0 1px 0,#FFFFFF -1px 0 0,#FFFFFF 0 -1px 0;
    *filter:GLow(color=#FFFFFF,strengh=1);
} 
img{
    width:350px;
    height:auto;
    position:inherit;
    z-index: -1;
}
p{
    position:absolute;
    top:0;
    left:0;
    right:0;
    z-index: 0;
}
</style>
