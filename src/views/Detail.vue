<template lang="pug">
  v-container(grid-list-xl='')
    v-layout()
      v-flex(
        justify-center
        )
        h1(class='display-2') {{task.data.name}}
        span.timestamp {{task.data.date}}
        v-flex(class='task-body' xs10)
          span(class='display-2')  Описание задачи
          v-textarea(
            name='input-7-1' 
            :value='task.data.body'
            disabled
            no-resize
            flat
            
          )
            | {{task.data.body}}
        
</template>
<script>
import {db} from '@/main'
import {mapGetters} from 'vuex'
export default {
  computed: {
    task () {
      return this.$store.getters.getTasks
        .filter(element => {
          console.log(element)
          return element.id === this.$route.params.id
      })
      .shift()
    }
  },

}
</script>
<style lang="stylus" scoped>
.task-body
  margin 0 auto
  margin-top 25px
</style>

