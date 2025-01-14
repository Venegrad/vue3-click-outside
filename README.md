# Vue 3 Click Outside directive

Directive for adding click outside event in Vue 3 or Nuxt3

## Using in component
```html
<template>
<div class="conainer">
  <div  v-outside="hide">
    <button @click="open = true">{{ open }}</button>
  </div>
</div>
</template>

<script>
import outside from "@venegrad/vue3-click-outside"

export default {
  data() {
    return {
      open: false
    }
  },
  directives: {
    outside
  },
  methods: {
    hide() {
      this.open = false
    }
  }
}
</script>
```

or u can register it global if need \
`./src/main.js`
```js
import { createApp } from 'vue'
import App from './App.vue'
import outside from "@venegrad/vue3-click-outside"

const app = createApp(App)
app.directive('outside', outside)
app.mount('#app')
```

## Nuxtjs 3

use it as global plugin: \
`./plugins/global.js`
```js
import outside from "@venegrad/vue3-click-outside"

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive('outside', outside)
})
```



## Help links: 
- If my solution was helpful to you, please give me a star on [Github](https://github.com/Venegrad/vue3-click-outside) or get my day better with: 
- USDT TRC20: `TKXybH3YoFvT5h8bQFLdkDBtiXA65y7xaB`
- USDT ERC20: `0xc3efeB4825E350eE5D6B032Aa1dE144B09B5bB0D`
