<template>
  <div class="dashboard" v-if="currentUser">
    <h1>Welcome {{ currentUser.name }}!</h1>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import c3 from 'c3';
import {useStore} from "vuex";

export default defineComponent( {
  name: 'Dashboard',
  setup() {
    const store = useStore();

    const currentUser: {} = computed((): void => {
      return store.state.auth.user;
    });

    const initChart = ():void => {
      c3.generate({
        data: {
          x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
          columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d'
            }
          }
        }
      })
    };

    onMounted(() => {
      initChart();
    })

    return {
      currentUser,
    }
  }
})
</script>

<style lang="scss">

</style>
