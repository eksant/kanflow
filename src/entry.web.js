console.log('entry.web.js')
const Vue = require('vue')
const App = require('./App').default

new Vue({
  template: `
      <App/>
  `,

  components: {
    App
  }
}).$mount('#app');
