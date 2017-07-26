<template lang="pug">
  #app
    parent-comp(class="my-class")
      //- child-comp
</template>

<script>
import ParentComp from './components/ParentComp';

export default {
  name: 'app',
  components: {
    ParentComp
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
</style>
