<template lang="pug">
  #app

    h1 App에서 수신하는 Couter 컴포넌트의 목소리 (with Global EventBus 객체)
    p {{ countfromEventBus }}

    total-counter(:counters="[12, 9, -3]" :app-mood="mood")

    //- total-counter(:counters="[102, 1]")
    //- total-counter(:counters="[0]")
    //- total-counter(:counters="[12, 9, 2, 4, 7, -3]")

    //- counter(:init-value="10" @click.native="detectAppEvent")

</template>

<script>
import EventBus from './EventBus';
import TotalCounter from './components/TotalCounter';
import Counter from './components/Counter';

export default {
  name: 'app',
  mounted () {
    EventBus.$on('to-evb',(a,b)=>{
      // console.log(this);
      this.a = a;
      this.b = b;
    });
  },
  components: {
    TotalCounter, Counter
  },
  data () {
    return {
      mood: 'Happy',
      a: 0,
      b: 0
    }
  },
  computed: {
    countfromEventBus(){
      return `${this.a} / ${this.b}`;
    }
  },
  methods: {
    detectAppEvent(e){
      console.log('clicked detectAppEvent');
      console.log(e.target);
    }
  }
}
</script>

<style lang="sass">
  html
    font-size: 100%
    background: #fff
  body
    margin: 0
  #app
    padding: 1.4em
  .component
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 1.4em
    border: 3px solid currentColor
    h1
      font-weight: 100
    ul
      list-style: none
      padding-left: 0
</style>
