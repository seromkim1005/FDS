<template lang="pug">
  #app
    total-counter(:counters="[2, 4, 6, 10, 21]")

</template>

<script>
import TotalCounter from './components/TotalCounter';

export default {
  name: 'app',
  components: {
    ParentComp, TotalCounter
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
