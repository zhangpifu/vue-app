<template>
  <div id="Layout">
    <Header :title="routerMate.title" :left-arrow="routerMate.leftArrow" :header-show="routerMate.headerShow" />
    <AppMain />
    <Footer :tabbar-show="routerMate.tabbarShow" />
  </div>
</template>

<script>
import Header from 'layout/components/Header'
import AppMain from 'layout/components/AppMain'
import Footer from 'layout/components/Footer'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Header,
    AppMain,
    Footer
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['routerMate'])
  },
  created() {
    console.log('=======layoutindex')
    console.log(this.routerMate)
  }

}
</script>
