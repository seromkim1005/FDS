<template lang="pug">
  #app
    //- parent-comp(class="my-class")
    //- child-comp
    total-counter(:counters="[2, 4, 6, 10, 21]")

</template>

<script>
import ParentComp   from './components/ParentComp';
import TotalCounter from './components/TotalCounter';

export default {
  name: 'app',
  components: {
    ParentComp, TotalCounter
  },
  data () {
    return {

    }
  },
  // methods: {
  //   recieveInc(){
  //     console.log('recieveInc');
  //   },
  //   recieveDec(){
  //     console.log('recieveDec');
  //   }
  // }
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
