export default {
  template: `
    <div class="component-root">
      <h3 class="title is-3">{{ headline }}</h3>
    </div>
  `,
  // 루트 Vue 인스턴스가 아닌,
  // 컴포넌트 정의에서는 data는 반드시 함수여야 한다.
  // 그리고 객체를 반환해야 한다.
  data(){
    return {
      headline: 'App Headline JS File'
    };
  }
};