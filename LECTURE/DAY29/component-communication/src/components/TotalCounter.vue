<template lang="pug">
  div.total-counter
    div.total-count {{ total_count }}
    slot
</template>

<script>
export default {
  data () {
    return { total_count: 0 }
  }
}
</script>

<style lang="sass">
.total-counter
  margin: 20px
  border: 4px solid #cacaca
  border-radius: 9px
  padding: 20px

.total-count
  text-align: center
  margin:
    left: -20px
    right: -20px
  padding-bottom: 10px
  font-size: 30px
  color: #acacac
  background: linear-gradient(180deg, transparent 40%, rgba(#afafaf, 0.1))
  border-bottom: 2px solid #eee
  margin-bottom: 20px
</style>

