<template>
  <div class="dashboard" v-if="currentUser">
    <header class="dashboard__header">
      <h1 class="dashboard__header-heading">Welcome <strong>{{ currentUser.name }}</strong>!</h1>
    </header>
    <div class="dashboard__chart" id="chart"></div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import c3 from 'c3';
import {useStore} from "vuex";
import axios from "axios";

export default defineComponent( {
  name: 'Dashboard',
  setup() {
    const store = useStore();
    const coworkersChart = ref([]);

    const currentUser: any = computed((): void => {
      return store.state.auth.user;
    });

    const initChart = (dates, amounts) :void => {
      dates.unshift('x');
      amounts.unshift('New Coworkers');

      c3.generate({
        data: {
          x: 'x',
          columns: [
            dates,
            amounts,
          ],
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

    onMounted(async () => {
      const res: any = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/coworkers/chart/${currentUser.value.coworking_id}`);
      initChart(res.data?.dates, res.data?.amounts);
    })

    return {
      currentUser,
      coworkersChart,
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
