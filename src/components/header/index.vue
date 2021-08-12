<template>
    <div class="header">
      <div class="header-logo">
        <img src="@/assets/logo.png" alt="" srcset="" />
      </div>
      <div class="header-menu">
        <MenuList />
        <router-link to="/about">about</router-link>
      </div>
      <div class="header-profile">
        <LoginContainer />
      </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import LoginContainer from '../login/index.vue'
import MenuList from '../menu/index.vue'
export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    LoginContainer,
    MenuList
  },
  setup (props) {
    const { title } = toRefs(props)
    console.log(title.value)
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header{
  width: calc(100% - 24px);
  height: calc(6vh - 16px);
  background-color: #1976d2;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0px 20px 0px rgb(0 0 0 / 5%);
  padding: 8px 12px;
  color: #fff;
  display: grid;
  grid-template-columns: 5% 75% 20%;
}
.header-logo{
  width: 41.58px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.header-profile{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
