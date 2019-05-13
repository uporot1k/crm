<template lang="pug">
  v-container(grid-list-xl='')
    v-layout
      v-flex
        h1(class='display-2') Список задач
        v-content
          v-list(two-line='')
            template(v-for='(item, index) in tasks')
              v-list-tile(:key='item.id' avatar='' ripple='' )
                v-list-tile-content
                  router-link(
                    :to='/task/+item.id'
                  ) {{ item.data.name }}
                  span.timestamp {{item.data.date}}
               

</template>

<script>
import {db} from '@/main'
import {mapState} from 'vuex'
import moment from 'moment'
export default {
  name: 'TasksList',
  data() {
    return {
      readyList: []
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks

    }),
  },
  created () {
    this.readyList = this.tasks.map(element => {
      let time = element.data.date;
      //let time = element.data.date.toDate();
      console.log(time)
    });
  }
}
</script>
