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
            :disabled='!edit'
            no-resize
            flat 
          )
          v-btn(
            @click='editTask'
            
          )
            | {{this.btnWord}}
          v-btn(
            @click='initTimer'
            
          )
            | Начать 
          span Потраченное время на задачу: {{cur}}:{{this.timer.time.min}}:{{this.timer.time.hours}}
</template>
<script>
// TODO Доделать таймер
import {db} from '@/main'
import {mapGetters} from 'vuex'
import Timer from '@/help/timer'
export default {
  data() {
    return {
      edit: false,
      btnWord: 'Редактировать',
      start: false,
      cur: null,
      id: this.$route.params.id
    }
  },
  computed: {
    task () {
      return this.$store.getters.getTasks
        .filter(element => {
          console.log(element)
          return element.id === this.$route.params.id
      })
      .shift()
    },
    timer () {
      let box = new Timer(JSON.parse(this.task.data.workTime));
      console.log(box)
      return box
    },
    // workTime () {
    //   this.task.data.wor
    // }
  },
  watch: {
    timer (time) {
      console.log(time.time)
      this.cur = time.time
    }
  },
  methods: {
    editTask () {
      this.edit = !this.edit
      if(this.btnWord === 'Редактировать')
        this.btnWord = 'Сохранить'
        else
        this.btnWord = 'Редактировать'
    },
    initTimer () {
      if (this.start) {
        this.timer.stop()
        console.log(this.timer)
        this.start = false
        
        db.collection('tasks').doc(this.id).update({
          workTime: JSON.stringify(this.timer.time),
          active: this.task.data.active
        })
      } else {
        this.timer.tick()
        this.start = true
        this.task.data.active = !this.task.data.active
      }
    }
  },
  created () {
    console.log(this)
    if (this.task.data.active) {
      let a = this.timer.tick()
      console.log(a)
      this.start = true
    }
  },
  beforeDestroy () {
    this.timer.stop()
    console.log(this)
    db.collection('tasks').doc(this.id).update({
      workTime: JSON.stringify(this.timer.time)
    })
  }
}
</script>
<style lang="stylus" scoped>
.task-body
  margin 0 auto
  margin-top 25px
</style>

