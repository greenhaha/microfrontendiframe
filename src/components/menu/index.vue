<template>
    <router-link v-for="item, index in menuList" :key="index" :to="`/front-${item.path}`">{{item.name}}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menuList',
  data: () => ({
    menuList: [
      {
        path: 'reactdemo',
        name: 'demoreact'
      },
      {
        path: 'vuedemo',
        name: 'demovue'
      }
    ]
  }),
  setup () {
    return {
    }
  }
})
</script>
