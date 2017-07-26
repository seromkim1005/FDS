<template lang="pug">
  div.component
    h1 {{ mine }}
    child(
      class="child-component"
      parent-name="ParentComponent"
      temp="1990"
    )
</template>

<script>
import ChildComp from './ChildComp';
export default {
  components: {
    'child': ChildComp
  },
  data () {
    return {
      mine: 'Parent Component'
    }
  }
}
</script>

<style lang="sass">
.component
  display: flex
  justify-content: center
  align-items: center
  margin: 1em
  padding: 1.4em
  border: 3px solid currentColor
  color: #c5af95
  h1
    font-weight: 100
</style>


