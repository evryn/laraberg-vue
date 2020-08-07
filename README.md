# Laraberg Vue

This package contains editor-only part of Laraberg that can be implemented in your Vue.js app. For the backend, using Laraberg is required.

Its API can handle cookie-based authentications nicely (for example, Laravel Sanctum). You can edit `src/js/api/api-fetch.js` in case you need to deal with API calls (such as token-based auths). Read development section below for more details in this case. 

## Installation
Simply run the following command:
```bash
npm install --save laraberg-vue
```

## Usage

> You can examine a working project in [Laraberg Vue Example](https://github.com/evryn/laraberg-vue-example) repository. 

Import and use the plugin. You may need to consider your backend API endpoint URL for Laraberg in the `prefix` option:

```js
import Vue from 'vue'
import LarabergVue from 'laraberg-vue';

Vue.use(LarabergVue, {
  // Base URL of your API endpoint and Laraberg controller prefix
  prefix: 'https://api.example.com/laraberg',
})
```

You can pass other [Laraberg options](https://github.com/VanOns/laraberg#configuration-options) too. It's also possible to easily register your custom blocks. See [Laraberg Vue Example](https://github.com/evryn/laraberg-vue-example) project to advanced usage.

Now, use it in your template:

```vue
<template>
  <laraberg-editor v-model="html"/>
</template>

<script>
  export default  {
    data: () => ({
      html: `
        <!-- wp:heading -->
        <h2>Welcome</h2>
        <!-- /wp:heading -->
      `
	}),
  }
</script>
```

## Limitations
This package is based on Laraberg frontend sources and under the hood, these both use Wordpress Gutenberg editor. Only a single Gutenberg editor can present on the page at the time.

## Development
Building the package from source directory needs some more steps and that's because of how Gutenberg should be built (>250MB). I'm taking instructions from [here](https://github.com/VanOns/laraberg/issues/47#issuecomment-519416511):

1- Clone this repository:
```bash
git clone git@github.com:evryn/laraberg-vue.git
```

2- [Download Wordpress Gutenberg v8.1](https://codeload.github.com/WordPress/gutenberg/zip/release/8.1), extract it into a directory 
3- In extracted directory, build Wordpress Gutenberg and link it to your global node_modules:
```bash
npm install
npm run build
sudo npm link
```

4- Go back to this project's cloned directory and link global gutenberg to local node_modules:
```bash
npm install
npm link gutenberg
```
> ⚠ NOTE: If you need other packages to install, it's good idea to remove `gutenberg` link from local node_modules and link it after installation. Or else, you may need to go through step 1 with those time consuming tasks.

Now you can do your changes. You may serve and preview it with:
```bash
npm run serve
```

At the end, build final assets into `dist` directory:
```bash
npm run build
```
