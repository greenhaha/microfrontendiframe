<template>
  <div class="micro-frontContainer" :key="$store.state.currentMenu ? $store.state.currentMenu.name : ''">
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
  }
})
</script>
