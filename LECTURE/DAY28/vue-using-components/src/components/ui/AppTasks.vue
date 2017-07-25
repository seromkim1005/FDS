<template lang="pug">
  ul.app-tasks
    app-task(:key="index" v-for="(task,index) in app.tasks") {{ task }}
</template>

<script>
import AppTask from './AppTask.vue';

export default {
  components: { AppTask },
  data () {
    return {
      app: {
        tasks: 'one two three four five six'.split(' ')
      }
    }
  }
}
</script>

