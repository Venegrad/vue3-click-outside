var component = {
  mounted(el, binding) {
    const handler = e => {
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
  getSSRProps(binding, vnode) {
    return {};
  }
};

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = component;

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.directive('outside', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
