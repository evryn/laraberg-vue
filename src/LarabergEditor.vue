<template>
	<textarea
		id="larabergEditor"
		name="larabergEditor"
		hidden
		:value="value"
		@input="input"
	/>
</template>

<script>
  export default {
    name: 'LarabergEditor',
    data: () => ({
      lastValue: ''
    }),
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
    async mounted() {
      console.log(this.$laraberg);
      await this.$laraberg().init('larabergEditor', this.$larabergOptions())
      this.syncContent()
    },
    watch: {
      value: function (newVal) {
        this.setContent(newVal)
      }
    },
    methods: {
      input (value) {
        this.$emit('input', value)
	  },
      async setContent(value) {
        if (value !== this.lastValue) {
          try {
            await this.$laraberg().setContent(value)
          } catch (e) { }
        }
      },
      syncContent() {
        setInterval(() => {
			const value = this.$laraberg().getContent()
			if (value !== this.lastValue) {
			  this.lastValue = value
			  this.input(this.lastValue)
			}
        }, 50)
      }
    }
  }
</script>
