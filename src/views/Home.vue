<template>
  <div class="micro-frontContainer" :key="$store.state.currentMenuKey ? $store.state.currentMenuKey : ''">
    <IframeContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IframeContainer from '../components/container/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    IframeContainer
  },
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    next((vm:any) => {
      vm.$store.dispatch('setCurrentMenuKey', to.path)
    })
  },
  methods: {
    reloaded () {
      this.$forceUpdate()
    }
  }
})
</script>
