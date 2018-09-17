<template>
    <li>
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
    font-family: 'Persona';
    src: url('../assets/PersonaTitle.ttf')
}
li {
    font-family: Persona;
    font-size: 30px;
    color: #000000;
} 
</style>
