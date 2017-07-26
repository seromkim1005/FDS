<template lang="pug">
  div.total-counter
    div.total-count {{ total_count }}
    counter(
      v-for="(counter,index) in total_counters"
      :key="index"
      :init-value="counter"
      @increase="recieveInc"
      @decrease="recieveDec"
    )
</template>

<script>
import Counter from './Counter';
export default {
  components: { Counter },
  props: {
    counters: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      total_count: 0,
      total_counters: this.counters
    }
  },
  methods: {
    recieveInc(){
      console.log('recieveInc');
    },
    recieveDec(){
      console.log('recieveDec');
    }
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

