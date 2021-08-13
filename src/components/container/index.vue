<template>
    <div id="iframe-container"></div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onMounted } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  beforeRouteEnter (to, from, next) {
    console.log(to.path)
    console.log(from.path)
    next()
  },
  setup () {
    const store = useStore()
    const iframe = document.createElement('iframe')
    onMounted(() => {
      const mountedNode = document.getElementById('iframe-container')
      iframe.id = 'microIframe'
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.margin = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.border = 'none'
      iframe.onload = () => {
        console.log('这样子就没问题了')
      }
      iframe.src = store.state.currentMenu ? store.state.currentMenu.address : 'http://localhost:3000/'

      if (mountedNode) {
        mountedNode.appendChild(iframe)
      }
    })
    onUnmounted(() => {
      iframe.remove()
    })
    return {}
  }
})
</script>

<style scoped>
#iframe-container{
    width: 100%;
    height: 94vh;
}
</style>
