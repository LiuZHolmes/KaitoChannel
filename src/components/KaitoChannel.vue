<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--<a href="http://localhost:8080/#/helloworld"> Vue-HelloWorld </a> -->
    <!--<button v-on:click="addNewEvent">Add</button> -->
    <ul>
        <li is="comment" v-for="event in events" v-bind:key="event.id" v-bind:title="event.title">
        </li>
    </ul>
    <textarea @keyup.enter="addNewEvent" v-model="text" placeholder="I want to change someone's mind..." autofocus="true"></textarea>
  </div>
</template>

<script>
import comment from './comment'
export default {
  /* eslint-disable */
  name: 'KaitoChannel',
  components: {
    'comment' : comment
  },
  data: function () {
    return {
      msg: 'Kaito Channel',
      text: '',
      events:[
        {
          id: 1,
          title: 'Yamakashi sensei'
        }
      ],
      nextEventId: 2
    }
  },
  computed:{
    eventsR: function() {
        return _.orderBy(this.events,['id'],['desc'])
    }
  },
  methods:{
    addNewEvent: function() {
        this.events.push({
            id: this.nextEventId++,
            title: this.text
        })
        this.text = ''
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'PersonaTitle';
    src: url('../assets/PersonaTitle.ttf')
}
div {
    text-align: center;
    margin:0 ;
    position:fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
}
h1 {
    font-family: PersonaTitle;
    font-size: 100px;
    color: #000000;
}
ul {
    height: 500px;
    list-style:none;
    overflow-y:scroll;
}
textarea {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: visible;
}
</style>
