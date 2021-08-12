<template>
  <div>
    <Header title="headerssss"/>
  </div>
  <div class="micro-frontContainer">
    <IframeContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/header/index.vue'
import IframeContainer from '../components/container/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header,
    IframeContainer
  }
})
</script>
