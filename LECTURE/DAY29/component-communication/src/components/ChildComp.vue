<template lang="pug">
  div.component
    h1 {{ mine }}
    h3 상위 컴포넌트로 부터 전달 받은 속성들
    ul
      li {{ parentName }}
      li {{ temp }}
</template>

<script>
export default {
  // 상위 컴포넌트로부터 전달된 속성을 받기 위해서는
  // props 를 통해 명시적 선언을 해야 한다.
  props: ['parentName', 'temp'],
  data () {
    return {
      mine: 'Child Component'
    }
  }
}
</script>

<style lang="sass">
.component
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 1em
  padding: 1.4em
  border: 3px solid currentColor
  color: #957f65
  h1
    font-weight: 100

  ul
    padding-left: 0
</style>


