<template lang="pug">
  div.component
    h1 {{ mine }}
    h3 상위 컴포넌트로 부터 전달 받은 속성들
    ul
      li {{ parentName }}
      li {{ temp }}
      li Computed: {{ mine_propMessage }}
      //- li Data: {{ mine_prop_msg }}
    //- button(
    //-   type="button"
    //-   @click="mine_prop_msg = 'change data from child component'")
    //-   | Chanage Prop Message
</template>

<script>
export default {
  // 상위 컴포넌트로부터 전달된 속성을 받기 위해서는
  // props 를 통해 명시적 선언을 해야 한다.

  // props: ['parentName', 'temp', 'prop-message'],
  // 부모로부터 전달받은 속성 유형 검증 시스템
  // 유형(type) 검증,
  // 필수(required) 검증,
  // 기본 값(default) 설정
  // 사용자 정의 유효성검사(validator) 설정
    // 결과가 거짓이면 Vue에서 오류 메시지 보여줌
  props: {
    parentName: {
      type: String,
      validator(v){
        return v.trim() !== '';
      }
    },
    temp: {
      type: Number,
      required: true,
    },
    propMessage: {
      type: Array,
      // required: false,
      // 주의! 참조형 데이터의 경우, 함수를 통해 객체를 반환해야 한다.
      default: function(){
        return ['오늘도'];
      }
    }
  },
  data () {
    return {
      mine: 'Child Component',
      mine_prop_msg: this.propMessage,
      copyed_message: []
    }
  },
  computed: {
    mine_propMessage() {
      this.copyed_message = this.propMessage;
      return this.copyed_message.join(' ');
    }
  }
}
</script>

<style lang="sass" scoped>
.component
  margin: 1em 0 0 0
  color: #957f65
</style>


