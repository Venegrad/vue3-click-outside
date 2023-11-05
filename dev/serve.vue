<template>
<div >
	<button v-outside="hide" @click="open = true">CLICK</button>
	<div>{{ open }}</div>
</div>
</template>

<script>
import outside from '../src/venClickOutside';
export default {
	directives: {
		outside
	},
	data() {
		return {
			open: false
		}
	},
	methods: {
		hide() {
			this.open = false
		}
	},
}
</script>