<template>
  <div>
    <Header title="headerssss"/>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Header from './components/header/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    window.addEventListener('message', function (e) {
      try {
        const data = JSON.parse(e.data)
        store.dispatch('addMenuList', data)
        router.push({
          path: data.from
        })
        // store.dispatch('setCurrentMenu', data.origin + data.form)
        console.log('hahahah get info from iframe', data)
        if (data.from === 'auth' && data.event === 'close') {
          console.log('hahahah get info from iframe', data)
        }
      } catch (error) {
        console.log(error)
      }
    })
  }
})
</script>
<style lang="scss">
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0
}

html {
    color: #000;
    overflow-y: scroll;
    overflow: -moz-scrollbars
}

body, button, input, select, textarea {
    font: 12px arial
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%
}

em {
    font-style: normal
}

small {
    font-size: 12px
}

ul, ol {
    list-style: none
}

a {
    text-decoration: none
}

a:hover {
    text-decoration: underline
}

legend {
    color: #000
}

fieldset, img {
    border: 0
}

button, input, select, textarea {
    font-size: 100%
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

img {
    -ms-interpolation-mode: bicubic
}

textarea {
    resize: vertical
}
</style>
