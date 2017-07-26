<template lang="pug">
  #app
    total-counter(:counters="[12, 9, -3]")
    //- total-counter(:counters="[102, 1]")
    //- total-counter(:counters="[0]")
    //- total-counter(:counters="[12, 9, 2, 4, 7, -3]")

    counter

</template>

<script>
import TotalCounter from './components/TotalCounter';
import Counter from './components/Counter';

export default {
  name: 'app',
  components: {
    TotalCounter, Counter
  },
  data () {
    return {

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
