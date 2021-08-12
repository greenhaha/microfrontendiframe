<template>
    <div class="login-singin">SIGN IN</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginContainer',
  setup () {
    return {}
  }
})
</script>

<style scoped>
.login-singin{
    text-align: center;
    font-size: 1.025rem;
    padding: 6px 14px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.login-singin:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.04);
}
</style>
