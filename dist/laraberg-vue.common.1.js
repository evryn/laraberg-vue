((typeof self !== 'undefined' ? self : this)["webpackJsonplaraberg_vue"] = (typeof self !== 'undefined' ? self : this)["webpackJsonplaraberg_vue"] || []).push([[1],{

/***/ "290b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5f86209b-vue-loader-template"}!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/LarabergEditor.vue?vue&type=template&id=3c5080cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{attrs:{"id":"larabergEditor","name":"larabergEditor","hidden":""},domProps:{"value":_vm.value},on:{"input":_vm.input}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/LarabergEditor.vue?vue&type=template&id=3c5080cc&

// EXTERNAL MODULE: C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("c96f");

// EXTERNAL MODULE: C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1b2a");

// CONCATENATED MODULE: C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/LarabergEditor.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LarabergEditorvue_type_script_lang_js_ = ({
  name: 'LarabergEditor',
  data: function data() {
    return {
      lastValue: ''
    };
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.$laraberg);
              _context.next = 3;
              return _this.$laraberg().init('larabergEditor', _this.$larabergOptions());

            case 3:
              _this.syncContent();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    value: function value(newVal) {
      this.setContent(newVal);
    }
  },
  methods: {
    input: function input(value) {
      this.$emit('input', value);
    },
    setContent: function setContent(value) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(value !== _this2.lastValue)) {
                  _context2.next = 8;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return _this2.$laraberg().setContent(value);

              case 4:
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 6]]);
      }))();
    },
    syncContent: function syncContent() {
      var _this3 = this;

      setInterval(function () {
        var value = _this3.$laraberg().getContent();

        if (value !== _this3.lastValue) {
          _this3.lastValue = value;

          _this3.input(_this3.lastValue);
        }
      }, 50);
    }
  }
});
// CONCATENATED MODULE: ./src/LarabergEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_LarabergEditorvue_type_script_lang_js_ = (LarabergEditorvue_type_script_lang_js_); 
// CONCATENATED MODULE: C:/Users/Amirreza/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/LarabergEditor.vue





/* normalize component */

var component = normalizeComponent(
  src_LarabergEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LarabergEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=laraberg-vue.common.1.js.map