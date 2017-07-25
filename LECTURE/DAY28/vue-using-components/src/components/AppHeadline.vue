<template lang="pug">
  div
    h1.title.is-3 {{ headline }}
    h3.title.is-5 {{ subheadline }}
</template>

<script>
export default {
  name: 'app-headline',
  data () {
    return {
      headline: 'App Headline',
      subheadline: 'App Subheadline'
    }
  }
}
</script>

<style lang="sass">

</style>


