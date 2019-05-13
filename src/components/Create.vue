<template lang="pug">
  form
    v-text-field(
      v-model='name' 
      :counter='10' 
      label='Название' 
      )
    v-textarea(
      v-model='body' 
      label='Описание' 
      no-resize
      )
      

    v-btn(
      @click='submit'
      ) Добавить



</template>

<script>
import {db} from '@/main'
import moment from 'moment'
export default {
  name: 'Create',
  data () {
    return {
      name: '',
      body: ''
    }
  },
  
  methods: {
    submit () {
      console.log(moment)
      if (this.name) {
        const task = {
          name: this.name,
          body: this.body,
          date: moment(new Date).format("DD/MM/YYYY ss:mm:hh"),
          workTime: 0,
          active: false
        }
        db.collection('tasks').add({
          ...task
        })
        .then(res => {
          console.log(res)
          db.collection('tasks').doc(res.id).get()
          .then(task => this.$store.dispatch('editTask', {id: res.id, data: task.data()}))
        })
        .catch(error => console.log(error))
        this.name = ''
        this.body = ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
  form
    max-width 500px
    .v-input
      &:not(:last-child)
        margin-bottom 30px
</style>

