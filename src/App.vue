<template lang='pug'>
  v-app


    v-toolbar(app='' class='light-blue darken-3')
    
        
      v-spacer
      v-btn(flat='' href='https://github.com/vuetifyjs/vuetify/releases/latest' target='_blank')
        span.mr-2 Latest Release

    v-content
      v-navigation-drawer(stateless='' value='true' app clipped)
        v-list
          v-list-group(
            v-for='item in sidebarItems'
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          )
            template(v-slot:activator='')
              v-list-tile
                v-list-tile-content
                  v-list-tile-title {{ item.title }}
            v-list-tile(v-for='subItem in item.child' :key='subItem.title' @click='' )
              v-list-tile-action
                v-icon {{ subItem.icon }}
              v-list-tile-content
                router-link(
                  :to='subItem.path'
                )
                  | {{ subItem.title }}
              

            
           
      router-view

</template>

<script>
import {db} from '@/main'
import HelloWorld from './components/HelloWorld';
import moment from 'moment'
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
      sidebarItems: [
        {
          action:'ballot',
          title:'Задачи',
          child: [
            {
              title:'Список',
              path:'/task/list',
              icon: 'list'
            },
            {
              title:'Создать задачу',
              path:'/task/edit',
              icon: 'add_box'
            }
          ]
        }
      ],
      tasks: []
    };
  },
  mounted () {
    db.collection('tasks').get()
    .then((snap)=>{
      let tasks= []
      snap.forEach(function(doc) {
        let task = {
            id: doc.id, 
            data: doc.data()
          }

        tasks.push(task)
            
        });
      return tasks
    })
    .then((tasks)=> this.$store.dispatch('fetchTask', tasks))
  }
};
</script>
