<template>
  <div class="dashboard" v-if="currentUser">
    <header class="dashboard__header">
      <h1 class="dashboard__header-heading">Welcome <strong>{{ currentUser.name }}</strong>!</h1>
    </header>
    <div class="dashboard__chart" id="chart"></div>
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
            ['data2', 130, 340, 200, 500, 250, 350],
            ['data3', 230, 480, 300, 600, 350, 450]
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
.dashboard {
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-heading {
      align-self: flex-start;
      color: var(--color-black);

      strong {
        color:var(--color-secondary-40);
      }
    }
  }

  &__chart {
    margin: 20rem 0;
  }
}
</style>
