<template>
  <div id="home">
    首页
  </div>
</template>

<script>
import { index_data } from '@/api/index'
export default {
  data() {
    return {

    }
  },
  created() {
    index_data({ page: 1 }).then(res => {
      console.log(res)
    })
  },
  methods: {

  }
}
</script>
