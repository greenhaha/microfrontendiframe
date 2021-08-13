<template>
  <div v-for="item, index in $store.state.menuList" :key="index" @click="linkToPage(item)">
    {{item.name}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
interface menuObj {
  path: string,
  name: string
}
export default defineComponent({
  name: 'menuList',
  methods: {
    ...mapActions(['setCurrentMenu']),
    linkToPage (item: menuObj) {
      this.setCurrentMenu(item)
      this.$forceUpdate()
      this.$router.push({ path: item.path })
    }
  }
})
</script>
