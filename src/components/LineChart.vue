<template>
  <div>
    <div style="display: flex; justify-content: space-around">
      <div>
        <h2>Check your Chart</h2>
        <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const optionsD = ref({})
const seriesD = ref([44, 55, 41, 17, 15])
const options = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
})

const series = ref([
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
])

onMounted(() => {})
</script>
