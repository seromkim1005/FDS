# 계산된 속성(Computed Properties)

계산 된 속성 :
```js
computed: {
  val () {
    return this.someDataProperty * someOtherVariable;
  }
}
```

`val` 이름을 가진 지정된 Vue 인스턴스 속성을 만듭니다.
`this.someDataProperty`가 변경되면 즉시, 반응성 시스템에 따라 계산된 속성이 다시 계산됩니다.
속성이기에 함수처럼 인자를 전달할 수 없습니다.

즉, 아래와 같이 사용할 수 없습니다.

```js
computed: {
  val (flag) {
    return (flag === 1) ?
      this.someDataProperty * someOtherVariable :
      this.someDataProperty * 5
    }
}
```

참조 : https://vuejs.org/v2/guide/computed.html#Computed-Setter


# 감시자(Watcher)

watch :

```js
watch: {
   val (n, o) {
     // n === new value
     // o === old value
     console.log(n, o);
   }
}
```

새로운 반응성 속성을 만들지 않고, 이미 정의된 반응성 속성을 관찰합니다.
계산된 속성과 달리 특정 속성 하나만 감시 가능합니다. 계산된 속성과 달리
이전 값과 현재(new) 값을 비교할 수 있습니다.

## 계산된 속성  VS  감시자

계산된 속성은 다음과 같은 경우에 사용합니다.

- 종속된 속성에 의존하여 화면의 텍스트를 변경하고자 할 때
- 복잡한 식을 줄이고자 할 경우

`this.$store.state.someProperty.someNestedProperty.someDeeplyNestedProperty`

```js
computed: {
  someDeeplyNestedProperty () {
     return this.$store.state.someProperty.someNestedProperty.someDeeplyNestedProperty;
  }
}
```

스토어 데이터가 업데이트 될 때마다 `someDeeplyNestedProperty`는 최신 값을 반환 합니다.


감시자는 1개의 반응성 속성이 요구되는 값으로 변경되었는지 확인할 경우 유용합니다.

```js
watch: {
  somethingSelected() {
    this.router.push('someOtherRoute')
  }
}
```