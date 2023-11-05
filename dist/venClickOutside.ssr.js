'use strict';var component$1 = {
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
};// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(() => {
  // Get component instance
  const installable = component$1;

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.directive('outside', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// iife/cjs usage extends esm default export - so import it all

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(_ref => {
  let [exportName, exported] = _ref;
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;