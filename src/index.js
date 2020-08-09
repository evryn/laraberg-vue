import LarabergEditor from './LarabergEditor.vue'
import Laraberg from "./js/laraberg";

/* global process */
const LarabergVue = {
  install (Vue, options = {}) {
    Vue.prototype.$laraberg = function () {
      return Laraberg
    };

    Vue.prototype.$larabergOptions = function () {
      return options
    };

    (options.customCategories ?? []).forEach(category => {
      Vue.prototype.$laraberg().registerCategory(category.title, category.slug)
    });

    (options.customBlocks ?? []).forEach(block => {
      Vue.prototype.$laraberg().registerBlock(block.name, block.block)
    });

    Vue.component('laraberg-editor', LarabergEditor)
  }
}

export default LarabergVue
