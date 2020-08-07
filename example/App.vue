<template>
	<div>
		<laraberg-editor v-model="html"/>

		<pre>
			{{ html }}
		</pre>
	</div>
</template>

<script>
  import Vue from 'vue'


  export default  {
    data: () => ({
	  html: `
		<!-- wp:heading -->
		<h2>Welcome</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p>Tell us a story ...</p>
		<!-- /wp:paragraph -->
	  `
	}),
  }
</script>
