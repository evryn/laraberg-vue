export default {
  title: 'My First Block!',
  icon: 'universal-access-alt',
  category: 'my-category',

  edit() {
    return '<h1>Hello editor.</h1>'
  },

  save() {
    return '<h1>Hello saved content.</h1>'
  }
}
