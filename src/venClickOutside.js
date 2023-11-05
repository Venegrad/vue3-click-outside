export default {
	mounted(el, binding) {
		const handler = (e) => {
			if (!el.contains(e.target) && el !== e.target) {
				binding.value(e);
			}
		};
		el.__ClickOutsideHandler__ = handler;
		document.addEventListener('click', handler);
	},
	beforeUnmount(el) {
		document.removeEventListener('click', el.__ClickOutsideHandler__);
	},
	getSSRProps (binding, vnode) {
		return {}
	}
}