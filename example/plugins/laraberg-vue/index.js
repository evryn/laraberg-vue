import Vue from 'vue'
import LarabergVue from "../../../dist/laraberg-vue.common";
import ShortcodeBlock from "./custom-blocks/ShortcodeBlock";

Vue.use(LarabergVue, {

  // Base URL of your API endpoint and Laraberg controller prefix
  prefix: 'https://api.example.com/laraberg',

  // Your custom categories to categorize blocks
  customCategories: [
    {
      name: 'My Category',
      slug: 'my-category'
    }
  ],

  // Your custom blocks that can be used in editor
  customBlocks: [
    {
      // A namespace prefix is required
      name: 'my-blocks/shortcode',
      block: ShortcodeBlock
    }
  ]

})
